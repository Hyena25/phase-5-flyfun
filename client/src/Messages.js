import { useState, useEffect } from "react"
import { Segment, List, Form, Input, Button } from 'semantic-ui-react'

const ws = new WebSocket("ws://localhost:3000/cable");

function Messages ({userData}) {

    const [messages, setMessages] = useState([]);
    const [guid, setGuid] = useState("");
    const messagesContainer = document.getElementById("messages")

    ws.onopen = () => {
        console.log("Connected to websocket server!")
        setGuid(Math.random().toString(36).substring(2,15));

        ws.send(
            JSON.stringify({
                command: "subscribe",
                identifier: JSON.stringify({
                    id: guid, 
                    channel: "MessagesChannel"
                }),
            })
        )
    };

    ws.onmessage = (e) => {
        const data = JSON.parse(e.data)
        if (data.type === "ping") return;
        if (data.type === "welcome") return;
        if (data.type === "confirm_subscription") return;

        const message = data.message
        setMessagesAndScrollDown([...messages, message])
    }
    useEffect(() => {
        fetchMessages();    
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = e.target.message.value;
        e.target.message.value = ""

        await fetch("http://localhost:3000/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ body, user_id: userData.id })
        }).then(res => res.json()).then(data => setMessages([...messages, data]))
    }

    const fetchMessages = async () => {
        const response = await fetch("http://localhost:3000/messages")
        // console.log(response)
        const data = await response.json();
        setMessagesAndScrollDown(data)
    }

    const setMessagesAndScrollDown = (data) => {
        setMessages(data);
        if(!messagesContainer) return;
        messagesContainer.scrollTop = messagesContainer.scrollHeight
    }
    
    return (
        <Segment>
            <List>
                {messages.map((message) => (
                    <List.Item key={message.id}>
                        <List.Content>
                            <List.Header>{message.user.username}</List.Header>
                            <List.Description>{message.body}</List.Description>
                        </List.Content>
                    </List.Item>
                ))}
            </List>
            <Form onSubmit={handleSubmit}>
                <Input name="message" placeholder='Type your message...'/>
                <Button type='submit'>Send</Button>
            </Form>
        </Segment>
        )
    }

export default Messages


// return (
//     <>
//         <div className="messageHeader">
//             <h1>Messages:</h1>
//             <p>Guid: {guid}</p>
//         </div>
//         <div className="messages" id= "messages">
//             {messages.map((message) => (
//                 <div className="message" key= {message.id}>
//                     <p>{message.body}</p>
//                 </div>
//             ))}
//         </div>
//         <div className="messageForm">
//             <form onSubmit={handleSubmit}>
//                 <input className="messageInput" type= "text" name="message"/>
//                 <button className="messageButton" type= "submit">
//                     Send 
//                 </button>
//             </form>
//         </div>
//     </>
//     )
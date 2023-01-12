import { useState } from "react"


function DestinationForm({destinationsData, setDestinationsData, userData}){
    // console.log(userData.id)
    const [newDestinationObj, setNewDestinationObj] = useState (
        {
            image: "",
            title: "",
            location: "",
            description: ""
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()

        const newDestination = {
            image: newDestinationObj.image,
            title: newDestinationObj.title,
            location: newDestinationObj.location,
            description: newDestinationObj.description,
            user_id: userData.id
            
        }
        fetch('/destinations', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( newDestination ) 
        })
        .then(res => res.json())
        .then(newDestinationData => {
            setDestinationsData([...destinationsData, newDestinationData])
        })

        setNewDestinationObj({
            image: "",
            title: "",
            location: "",
            description: ""
        })
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setNewDestinationObj({...newDestinationObj, image: e.target.value})} 
            name="image" type="text" value={newDestinationObj.image} placeholder="Image"
            />
            <input onChange={(e) => setNewDestinationObj({...newDestinationObj, title: e.target.value})} 
            name="title" type="text" value={newDestinationObj.title} placeholder="Title"
            />
            <input onChange={(e) => setNewDestinationObj({...newDestinationObj, location: e.target.value})} 
            name="location" type="text" value={newDestinationObj.location} placeholder="Location"
            />
            <input onChange={(e) => setNewDestinationObj({...newDestinationObj, description: e.target.value})} 
            name="description" type="text" value={newDestinationObj.description} placeholder="Description"
            />
            <button>Add Your Destination</button>
        </form>
        </>
    )
}

export default DestinationForm
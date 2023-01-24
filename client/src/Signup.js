import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Signup({updateUser}){
    let navigate = useNavigate()
    const [submited, setSubmited] = useState (false) 
    const [signupData, setSignupData] = useState({ 
        full_name: "",
        username: "",
        email: "",
        password:""
    })
    const [errors, setErrors] = useState([]) 
    const {full_name, username, email, password} = signupData

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            full_name,
            username,
            email,
            password
        }

        fetch('/users',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
          })
          .then(res => {
            if (res.ok){
                res.json().then(user => {
                    updateUser(user)
                    navigate('/destinations')
                })
            }else{
                res.json().then(json => setErrors(Object.entries(json.errors))) // for storing signup form errors
            }
        })
        setSubmited(!submited)

        setSignupData({
            full_name: "",
            username: "",
            email: "",
            password:""
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setSignupData({ ...signupData, [name]: value })
    }
    return(
        <>
            <h1>Signup page</h1>
            <form onSubmit={handleSubmit}>
            <input 
                 type = "text"
                 placeholder = 'enter full name'
                 name = "full_name"
                 value = {full_name}
                 onChange = {handleChange}/>
            <input 
                 type = "text"
                 placeholder = 'enter username'
                 name = "username"
                 value = {username}
                 onChange = {handleChange}/>
            <input
                type = "text"
                placeholder = 'enter your email'
                name = "email"
                value = {email}
                onChange = {handleChange}/>
            <input
                type = "password"
                placeholder = 'enter password'
                name = "password"
                value = {password}
                onChange = {handleChange}/>
            <button type = "submit">Sign Up</button>    
            </form>
            {errors?errors.map(e => <div className = "error-message">{e[0]+': ' + e[1]}</div>) : null}
        </>
    )

}

export default Signup
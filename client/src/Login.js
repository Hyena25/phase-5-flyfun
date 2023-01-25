import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Input, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"


function Login({updateUser}){
    const [loginData, setLoginData] = useState({
        username:"",
        password:""
    })
    const [errors, setErrors] = useState([]) 
    const {username, password} = loginData

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch('/login',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
          })
          .then(res => {
              if(res.ok){
                  res.json().then(user => {
                  updateUser(user) 
                  navigate('/destinations') 
              })
              } else{
                  res.json().then(json => setErrors(json.errors)) 
              }
          })
      }
  
      const handleChange = (e) => {
          const { name, value } = e.target
          setLoginData({ ...loginData, [name]: value }) 
      }
      return(
        <div className='login-page' >
            <h1 className="login-title">Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <Input 
                         type = "text"
                         placeholder = 'enter username'
                         name = "username"
                         value = {username}
                         onChange = {handleChange}
                         className = 'login-input'
                    />
                </Form.Field>
                <Form.Field>
                    <Input
                        type = "password"
                        placeholder = 'enter password'
                        name = "password"
                        value = {password}
                        onChange = {handleChange}
                        className = 'login-input'
                    />
                </Form.Field>
                <Button type = "submit" className = 'login-button'>Login</Button>    
            </Form>
            <p className="login-text-link">
                Don't have an account? <Link to="/signup">Signup here</Link>
            </p>
        </div>
    )
}

export default Login
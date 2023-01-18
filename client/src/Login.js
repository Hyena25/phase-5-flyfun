import { useState } from "react"
import { useNavigate } from "react-router-dom"


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
        <div>
            <h1>Login Page</h1>
            <form onSubmit = {handleSubmit}>
                <input
                    type = "text"
                    name = "username"
                    value = {username}
                    placeholder = 'enter username'
                    onChange = {handleChange} />
                <input
                    type = "password"
                    name = "password"
                    value = {password}
                    placeholder = 'enter password'
                    onChange = {handleChange}
                    />   
                    <button type="submit">Login</button>
            </form>
            {errors? <div className = "error-message">{errors}</div>: null}
        </div>
    )
}

export default Login
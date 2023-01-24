import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Menu, Button } from 'semantic-ui-react'

function Navbar({updateUser, currentUser}){

    let navigate = useNavigate()

    const handleLogOut = () => {
      if (window.confirm('Are you sure you want to log out ?')) {
      fetch(`/logout`, {
        method:"DELETE"
      })
      .then(res =>{
        if(res.ok){
          updateUser(false)
          navigate("/")
        }
      })
    }}

    
    return(
      <Menu stackable>
        {currentUser ? 
          (
            <>
                <Menu.Item as={NavLink} to= "/destinations">
                    Destinations
                </Menu.Item>
                <Menu.Item as={NavLink} to= "/profile">
                    Edit My Profile
                </Menu.Item>
                <Menu.Item as={NavLink} to= "/messages">
                  Messages
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={handleLogOut}>Log Out</Button>
                </Menu.Item>
                <Menu.Item>
                    Welcome {currentUser.username} !
                </Menu.Item>
            </>
          ) :
          (
            <>
              <Menu.Item as={NavLink} to= "/">
                    Home
              </Menu.Item>
              <Menu.Item as={NavLink} to= "/login">
                  Login
              </Menu.Item>
              <Menu.Item as={NavLink} to= "/signup">
                  Signup
              </Menu.Item>
              <Menu.Item as={NavLink} to= "/about">
                  About
              </Menu.Item>
            </>
          )
        }
      </Menu>
      )

}

export default Navbar
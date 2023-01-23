import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

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
  <>
    {currentUser ? 
      (
        <div>
            <NavLink to= "/destinations">
                <button>Destinations</button>
            </NavLink>
            <NavLink to= "/profile">
                <button>Edit My Profile</button>
            </NavLink>
            <NavLink to= "/bucket">
                <button>Bucket List</button>
            </NavLink>
            <NavLink to= "/messages">
              <button>Messages</button>
            </NavLink>
            <button onClick={handleLogOut}>Log Out</button>
            <p>Welcome {currentUser.username} !!</p>
        </div>
      ) :
      (
        <>
          <NavLink to= "/">
                <button>Home</button>
          </NavLink>
          <NavLink to= "/login">
              <button>Login</button>
          </NavLink>
          <NavLink to= "/signup">
              <button>Signup</button>
          </NavLink>
          <NavLink to= "/about">
              <button>About</button>
          </NavLink>
        </>
      )
    }
  </>
  )

}

export default Navbar
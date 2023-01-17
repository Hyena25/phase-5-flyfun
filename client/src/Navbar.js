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
                <button>Edit Profile</button>
            </NavLink>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) :
      (
        <>
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
  //   {customer?
                
  //     (
  //     <div className="loggedin"
  //     <NavLink className="logout" to="/logout">Logout</NavLink>
  //     </div>
  //     ) : (
  //     <div className="loggedout">
  //     <NavLink className="login" to="/login">Login</NavLink>
  //     <NavLink className="signup" to="/signup">Signup</NavLink>
  //     </div>
  //     )
  // }

}

export default Navbar
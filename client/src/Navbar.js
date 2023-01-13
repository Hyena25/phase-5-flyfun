import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Navbar({updateUser}){

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
        <div>
            <NavLink to= "/destinations">
                <button>Destinations</button>
            </NavLink>
            <NavLink to= "/profile">
                <button>Profile</button>
            </NavLink>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    </>
    )
}

export default Navbar
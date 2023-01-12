import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function NavbarHome(){
    return(
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

export default NavbarHome
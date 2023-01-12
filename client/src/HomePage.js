import Signup from "./Signup"
import Login from "./Login"
// import NavbarHome from "./NavbarHome";


function HomePage ({updateUser}){
    return(
        <>
            {/* <NavbarHome updateUser={updateUser}/> */}
            <h1> Home Page </h1>
            <Login updateUser= {updateUser}/>
            <Signup updateUser={updateUser}/>
            
        </>
    )
}

export default HomePage
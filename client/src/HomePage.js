import Signup from "./Signup"
import Login from "./Login"
// import NavbarHome from "./NavbarHome";



function HomePage ({updateUser}){
    return(
        <>
            {/* <NavbarHome updateUser={updateUser}/> */}
            <h1> Home Page </h1>
            {/* <Routes>
            <Route path= "/signup" element={<Signup updateUser={updateUser}/>}></Route>
            <Route path= "/login" element={<Login updateUser={updateUser}/>}></Route>
            </Routes> */}
            <Login updateUser= {updateUser}/>
            <Signup updateUser={updateUser}/>
            
        </>
    )
}

export default HomePage
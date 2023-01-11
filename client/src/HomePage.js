import Signup from "./Signup"
import Login from "./Login"

function HomePage ({updateUser}){
    return(
        <>
            <h1> Home Page </h1>
            <Login updateUser= {updateUser}/>
            <Signup/>
        </>
    )
}

export default HomePage
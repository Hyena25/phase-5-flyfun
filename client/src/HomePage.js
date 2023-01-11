import Signup from "./Signup"
import Login from "./Login"

function HomePage ({updateUser}){
    return(
        <>
        {/* <h1> Is this working ?</h1> */}
        <Login/>
        <Signup/>
        </>
    )
}

export default HomePage
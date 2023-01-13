import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import HomePage from "./HomePage";
import DestinationList from "./DestinationList";
import Profile from "./Profile";
import Navbar from "./Navbar";
import About from "./About";



function App() {
  const [destinationsData, setDestinationsData] = useState([])
  const [currentUser, setCurrentUser] = useState(false)
  const [errors, setErrors] = useState(false)
  const [ userData, setUserData ] = useState( [] )

  const updateUser = (user) => setCurrentUser(user)

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
          fetchDestinations()
        });
      }
    })
  },[userData.id])

  const fetchDestinations =() =>{
    fetch("/destinations")
    .then(res => {
      if(res.ok){
        res.json().then(setDestinationsData)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  useEffect( () =>{
    fetch ("/users/:id")
    .then ( res => res.json())
    .then (setUserData)
  },[currentUser])

  // console.log(destinationsData)
  if(errors) return <h1>{errors}</h1>
  return (
    <>
      {userData.id ? <Navbar updateUser = {updateUser}/> : null}
      {/* {userData.id ? null : <NavbarHome updateUser = {updateUser}/>} */}
      <Routes>
        <Route exact path= "/" element={<HomePage userData={userData} updateUser= {updateUser}/>}></Route>
        <Route path= "/destinations" element={<DestinationList userData={userData} setDestinationsData={setDestinationsData} destinationsData={destinationsData}/>}></Route>
        {/* <Route path= "/reviews" element= {<ReviewList destinationsData={destinationsData} userData={userData}/>}></Route> */}
        <Route path= "/profile" element= {<Profile/>}></Route>
        <Route path= "/about" element= {<About/>}></Route>
      </Routes>
    </>
  )
}

export default App;

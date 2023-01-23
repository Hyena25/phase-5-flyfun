import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import HomePage from "./HomePage";
import DestinationList from "./DestinationList";
import Profile from "./Profile";
import Navbar from "./Navbar";
import About from "./About";
import Signup from "./Signup"
import Login from "./Login"
import Messages from "./Messages"
import BucketList from "./BucketList"


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
    .then(()=>{
      fetch("/favorites")
      .then(res => res.json())
      .then(res => res.map(obj =>
      setDestinationsData(prev=> prev.map(destination=> 
      destination.id===obj.destination.id ? {...destination, isFavorite: true, favoriteId: obj.id} : destination))))
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
      {<Navbar userData = {userData} updateUser = {updateUser} currentUser = {currentUser}/>}
      <Routes>
        <Route exact path= "/" element={<HomePage userData={userData} updateUser= {updateUser}/>}></Route>
        <Route path= "/destinations" element={<DestinationList userData={userData} setDestinationsData={setDestinationsData} destinationsData={destinationsData}/>}></Route>
        <Route path= "/signup" element= {<Signup updateUser = {updateUser}/>}></Route>
        <Route path= "/login" element= {<Login updateUser = {updateUser}/>}></Route>
        <Route path= "/about" element= {<About/>}></Route>
        <Route path= "/profile" element= {<Profile user= {userData} updateUser={setCurrentUser}/>}></Route>
        <Route path= "/messages" element= {<Messages userData= {userData} />}></Route>
        <Route path= "/bucket" element= {<BucketList setDestinationsData = {setDestinationsData} destinationsData = {destinationsData} userData= {userData} />}></Route>
      </Routes>
    </>
  )
}

export default App;

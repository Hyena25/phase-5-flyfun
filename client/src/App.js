import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import HomePage from "./HomePage";
import DestinationList from "./DestinationList";
import ReviewList from "./ReviewList";
import Profile from "./Profile";

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
  // console.log(destinationsData)

  return (
    <div>
      <Routes>
        <Route exact path= "/" element={<HomePage updateUser= {updateUser}/>}></Route>
        <Route path= "/destinations" element={<DestinationList/>}></Route>
        <Route path= "/reviews" element= {<ReviewList/>}></Route>
        <Route path= "/profile" element= {<Profile/>}></Route>
      </Routes>
    </div>
  )
}

export default App;

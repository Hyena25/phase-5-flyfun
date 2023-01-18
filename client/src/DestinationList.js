import React, { useState } from 'react';
import DestinationContainer from './DestinationContainer';
import DestinationForm from './DestinationForm';

function DestinationList({ userData, destinationsData, setDestinationsData }) {
  const [searchBar, setSearchBar] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const filteredDestinations = destinationsData.filter((destination) => {
    if (searchBar && !destination.title.toLowerCase().includes(searchBar.toLowerCase())) {
      return false;
    }
    if (selectedCountry && destination.country !== selectedCountry) {
      return false;
    }
    if (selectedCity && destination.city !== selectedCity) {
      return false;
    }
    return true;
  });

  const renderDestinations = filteredDestinations.map((destinationsObj) => {
    return (
      <DestinationContainer
        key={destinationsObj.id}
        setDestinationsData={setDestinationsData}
        userData={userData}
        destinationsObj={destinationsObj}
      />
    );
  });

  return (
    <>
      <DestinationForm userData={userData} setDestinationsData={setDestinationsData} destinationsData={destinationsData} />
      <h1>Destination List</h1>
      <input
        type="text"
        placeholder="Search by title"
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
        <option value="All countries">All countries</option>
        {Array.from(new Set(destinationsData.map((d) => d.country))).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))
        }
      </select>
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="All cities">All cities</option>
        {Array.from(new Set(destinationsData.map((d) => d.city))).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {renderDestinations}
    </>
  );
}

export default DestinationList;


// import DestinationContainer from "./DestinationContainer";
// import DestinationForm from "./DestinationForm";

// function DestinationList ({userData, destinationsData, setDestinationsData}) {
//     const renderDestinations = destinationsData.map((destinationsObj) => {
//         return(
//         <DestinationContainer key={destinationsObj.id} setDestinationsData={setDestinationsData} userData= {userData} destinationsObj={destinationsObj}/>
//         )
//     })

    
//     return(
//         <>
//         <DestinationForm userData = {userData} setDestinationsData={setDestinationsData} destinationsData={destinationsData}/>
//         <h1>Destination List</h1>
//         {renderDestinations}
//         </>
//     )
//     }

// export default DestinationList;
import React, { useState } from 'react';
import DestinationContainer from './DestinationContainer';
import DestinationForm from './DestinationForm';
import { Form, Header } from 'semantic-ui-react';

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
      <Header as='h1' content='Checkout these Destinations !' className="destination-header"/>
      <Form>
      <Form.Input
        className='search-input-container'
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
      </Form>
      <div className = "all-cards">
      {renderDestinations}
      </div>
    </>
  );
  // return (
  //   <>
  //     <DestinationForm userData={userData} setDestinationsData={setDestinationsData} destinationsData={destinationsData} />
  //     <Header as='h1' content='Checkout these Destinations !' className="destination-header"/>
  //       <div className="search-input-container">
  //         <Form>
  //             <Form.Input
  //               type="text"
  //               placeholder="Search by title"
  //               value={searchBar}
  //               onChange={(e) => setSearchBar(e.target.value)}
  //               className='ui-input'
  //             />
    
  //             <Form.Select
  //               value={selectedCountry}
  //               onChange={(e) => setSelectedCountry(e.target.value)}
  //               className='ui-select'
  //               options={[
  //                 {key: 'All countries', value: 'All countries', text: 'All countries'},
  //                 ...Array.from(new Set(destinationsData.map((d) => d.country))).map((country) => (
  //                       {key: country, value: country, text: country}
  //                 ))
  //               ]}
  //             />
    
  //               <Form.Select
  //                 value={selectedCity}
  //                 onChange={(e) => setSelectedCity(e.target.value)}
  //                 className='ui select'
  //                 options={[
  //                     {key: 'All cities', value: 'All cities', text: 'All cities'},
  //                     ...Array.from(new Set(destinationsData.map((d) => d.city))).map((city) => (
  //                         {key: city, value: city, text: city}
  //                     ))
  //                 ]}
  //                 />
  //         </Form>
  //       </div>
  //     {renderDestinations}
  //   </>
  // );
  
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
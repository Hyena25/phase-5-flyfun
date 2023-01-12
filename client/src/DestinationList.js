import DestinationContainer from "./DestinationContainer";
import DestinationForm from "./DestinationForm";

function DestinationList ({userData, destinationsData, setDestinationsData}) {
    const renderDestinations = destinationsData.map((destinationsObj) => {
        return(
        <DestinationContainer key={destinationsObj.id} setDestinationsData={setDestinationsData} userData= {userData} destinationsObj={destinationsObj}/>
        )
    })

    
    return(
        <>
        <DestinationForm setDestinationsData={setDestinationsData} destinationsData={destinationsData}/>
        <h1>Destination List</h1>
        {renderDestinations}
        </>
    )
    }

export default DestinationList;
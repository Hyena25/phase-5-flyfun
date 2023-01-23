import DestinationContainer from './DestinationContainer'

function BucketList({userData, destinationsData, setDestinationsData}) {
    return(
        <>
            <h1>Bucket list</h1>
            {destinationsData.filter(destination=>destination.isFavorite).map(destination=>
                <DestinationContainer destinationsObj={destination} userData={userData}
                setDestinationsData={setDestinationsData}/>)}
        </>
    )
}

export default BucketList
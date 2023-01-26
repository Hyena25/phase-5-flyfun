import DestinationContainer from './DestinationContainer'

function BucketList({userData, destinationsData, setDestinationsData}) {
    return(
        <>
            <h1 className='bucket-list-header'>Your Bucket list</h1>
            <div className='bucket-list-destinations'>
            {destinationsData.filter(destination=>destination.isFavorite).map(destination=>
                <DestinationContainer destinationsObj={destination} userData={userData}
                setDestinationsData={setDestinationsData}/>)}
            </div>
        </>
    )
}

export default BucketList
import { Card, Image } from 'semantic-ui-react'

function DestinationContainer ({destinationsObj, userData, setDestinationsData}){
    console.log(destinationsObj.users)

    const deleteDestination = destinationId => {
        setDestinationsData(currentDestination => currentDestination.filter(destination => destination.id !== destinationId))
    }

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this destination?")){
        fetch(`/destinations/${destinationsObj.id}`, {
            method: 'DELETE'
        })
        .then( () => { deleteDestination(destinationsObj.id)} )
        }}

    return(
        <div className = "destination-container">
        <Card >
            <Image src= {destinationsObj.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{destinationsObj.title}</Card.Header>
                <Card.Meta>{destinationsObj.location}</Card.Meta>
                <Card.Description>{destinationsObj.description}</Card.Description>
            </Card.Content>
            {/* { destinationsObj.id === userData.id ? <button class="negative ui button" onClick={handleDelete} >Delete</button> : <></>} */}
            <button class="negative ui button" onClick={handleDelete} >Delete</button>
        </Card>
        </div>
    )
}


export default DestinationContainer
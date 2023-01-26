import { Card, Image, Icon, Segment, Button } from 'semantic-ui-react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ReviewList from "./ReviewList";


function DestinationContainer ({destinationsObj, userData, setDestinationsData}){
    const [showReview, setShowReview] = useState (false)
    const [favorite, setFavorite] = useState(false)
    // const [unfavorite, setUnfavorite] = useState(false)
    let navigate = useNavigate()
    const flipDestinationContainer = () => {
        setShowReview(!showReview)
    }

    const handleFavorite = () => {
        setFavorite(!favorite)
        setDestinationsData(prev=> prev.map(destination=> 
        destination.id === destinationsObj.id ? {...destination, isFavorite: !destination.isFavorite} : destination))
        if(destinationsObj.isFavorite){ 
            fetch (`/favorites/${destinationsObj.favoriteId}`, {method:"DELETE"})}
        else{
            fetch("/favorites",{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({user_id: userData.id, destination_id: destinationsObj.id})
            })
            .then(() => navigate('/bucket'))
        }
    }

    // const deleteDestination = destinationId => {
    //     setDestinationsData(currentDestination => currentDestination.filter(destination => destination.id !== destinationId))
    // }

    // const handleDelete = () => {
    //     if (window.confirm("Are you sure you want to delete this destination?")){
    //     fetch(`/destinations/${destinationsObj.id}`, {
    //         method: 'DELETE'
    //     })
    //     .then( () => { deleteDestination(destinationsObj.id)} )
    //     }}

    return(
        <div className = "destination-container">
        {showReview ?
            (<Segment className = "destination-container">
                <Segment className="destination-reviews">
                    <ReviewList destinationId={destinationsObj.id} userData={userData}/>
                </Segment>
            <Button onClick={flipDestinationContainer} className='return-button'>Return to destination</Button>
            </Segment>)
        :
        
        (<Card className = "destination-card">
            <Image src= {destinationsObj.image} onClick={flipDestinationContainer} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{destinationsObj.title}</Card.Header>
                <Card.Meta>{`${destinationsObj.city}, ${destinationsObj.country}`}</Card.Meta>
                <Card.Description>{destinationsObj.description}</Card.Description>
            </Card.Content> 
            <div onClick= {handleFavorite}> 
            {destinationsObj.isFavorite ? "Remove From Bucket List" : "Add To Bucket List"}
            {destinationsObj.isFavorite ? (
            <Icon name="star" color="yellow" />
            ) : (
            <Icon name="star outline" color="yellow" />
            )}

            </div>
        </Card>)
        }
        </div>
    )

}


export default DestinationContainer
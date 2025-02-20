import { Card, Image, Icon } from 'semantic-ui-react'
import { useState } from "react"
import ReviewList from "./ReviewList";


function DestinationContainer ({destinationsObj, userData, setDestinationsData}){
    const [showReview, setShowReview] = useState (false)
    const [favorite, setFavorite] = useState(false)
    // const [unfavorite, setUnfavorite] = useState(false)

    const flipDestinationContainer = () => {
        setShowReview(!showReview)
    }

    const handleFavorite = () => {
        setFavorite(!favorite)
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
            (<div className="destination-container-back">
                <div className="destination-reviews">
                    <ReviewList destinationId={destinationsObj.id} userData={userData}/>
                </div>
                <button onClick={flipDestinationContainer}>Return to destination</button>
            </div>)
        :
        
        (<Card >
            <Image src= {destinationsObj.image} onClick={flipDestinationContainer} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{destinationsObj.title}</Card.Header>
                <Card.Meta>{`${destinationsObj.city}, ${destinationsObj.country}`}</Card.Meta>
                <Card.Description>{destinationsObj.description}</Card.Description>
            </Card.Content> 
            <div onClick= {handleFavorite}> 
            Add to Bucket List 
            {favorite ?
            <Icon name='star' color='yellow'/>
            :
            <Icon name='star outline' color='yellow'/>
            }
            </div>
        </Card>)
        }
        </div>
    )

}


export default DestinationContainer
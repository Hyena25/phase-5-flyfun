import { Card, Image } from 'semantic-ui-react'

function DestinationContainer ({destinationsObj, userData}){
    // console.log(destinationsObj, userData)
    
    return(
        <div className = "destination-container">
        <Card >
            <Image src= {destinationsObj.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{destinationsObj.title}</Card.Header>
                <Card.Meta>{destinationsObj.location}</Card.Meta>
                <Card.Description>{destinationsObj.description}</Card.Description>
            </Card.Content>
        </Card>
        </div>
    )
}

export default DestinationContainer
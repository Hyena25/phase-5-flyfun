import { Container, Header, Segment, List } from 'semantic-ui-react'

const styles = {
    container: {
        backgroundImage: `url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg')`,
        padding: '4em',
        background: '#f9f9f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    header: {
        textAlign: 'center',
        fontSize: '2em',
        marginBottom: '1em'
    },
    segment: {
        textAlign: 'center',
        fontSize: '1.5em'
    },
    linkList: {
        textAlign: 'center',
        fontSize: '1.5em',
        marginTop: '2em'
    },
    link: {
        color: 'black'
    }
}

function About() {
    return(
        <Container style={styles.container}>
            <Header as='h1' style={styles.header}>About FlyFun</Header>
            <Segment style={styles.segment}>
                <p>FlyFun is a fullstack app built by Ryan Fassi, that allows users to discover, review, and add destinations to their bucket list. With FlyFun, users can add and delete destinations, see reviews from other users, and update their own reviews.</p>
                <p>The app also allows users to remove destinations from their bucket list when they have been visited, making it easy for them to keep track of their travels and plan for future adventures.</p>
                <p>FlyFun is the perfect tool for travel enthusiasts looking to plan their next trip or keep track of the destinations they have visited.</p>
            </Segment>
            <List horizontal style={styles.linkList}>
                <List.Item>
                    <a href='https://github.com/Hyena25' style={styles.link} target="_blank">Github</a>
                </List.Item>
                <List.Item>
                    <a href='https://www.linkedin.com/in/rayane-fassi-07a648256/' style={styles.link} target="_blank">LinkedIn</a>
                </List.Item>
                <List.Item>
                    <a href='mailto:rayanefassifihri@gmail.com' style={styles.link}>Email</a>
                </List.Item>
                <List.Item>
                    <a href='https://medium.com/@rayanefassifihri25' style={styles.link} target="_blank">Medium</a>
                </List.Item>
            </List>
        </Container>
    )
}

export default About
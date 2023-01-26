import { Container, Header } from 'semantic-ui-react'

const styles = {
  container: {
    backgroundImage: `url('https://roamnewroads.ca/wp-content/uploads/2016/08/shutterstock_242675014-1050x699.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: 'white',
    fontSize: '3em',
    textShadow: '1px 1px 2px black'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: '1.5em',
    textShadow: '1px 1px 2px black'
  }
}

function HomePage() {
    return(
        <Container style={styles.container}>
            <Header as='h1' style={styles.header}>Welcome to FlyFun !</Header>
            <p style={styles.text}>Discover, review, and add destinations to your bucket list.</p>
            <p style={styles.text}>Start planning your next adventure today!</p>
        </Container>
    )
}

export default HomePage
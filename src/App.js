import './App.css'
import GitHubCard from './GitHubCard/GitHubCard'
import Link from './PinballGameLink/Link'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div className="App" >
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <GitHubCard />
        </Col>
      </Row>
      <p>Play some pinball?</p>
      <Link page="https://voidmaelstrom.github.io/phaser-projects/Pinball/index.html">Pinball</Link>
    </div>
  )
}

export default App

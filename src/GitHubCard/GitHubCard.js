import React from "react"
import Card from "react-bootstrap/Card"
import BradsPic from '../Brad.jpeg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top"
                  display="block" 
                  margin-left="auto"
                  margin-right="auto"
                  width="80%" src={BradsPic} />
        <Card.Body>
            <Card.Title>Bradley Stouffer</Card.Title>
            <Card.Text>
            I am transitionining from QA as a testing engineer to a full-time software developer role.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard
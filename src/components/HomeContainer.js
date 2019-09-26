import React, { Component } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import MonitorTasks from './tasks/MonitorTasks'
import { Link } from 'react-router-dom'

class HomeContainer extends Component{

  handleClick = () => {

  }

  render(){
    return(
      <main>
          <Container fluid={true}>
              <Row noGutters={true}>
                  <Button as={Link} to="/create-new-task" id='new-task' variant="primary" onClick={this.handleClick}>Create New Task</Button>
              </Row>
              <Row noGutters={true}>
                  <MonitorTasks />
              </Row>
          </Container>
      </main>
    )
  }
}

export default HomeContainer;

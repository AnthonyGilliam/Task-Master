import React, { Component } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import MonitorTasks from './tasks/MonitorTasks'

class HomeContainer extends Component{
  render(){
    return(
      <main>
          <Container fluid={true}>
              <Row noGutters={true}>
                  <Button id='new-task' variant="primary">Create New Task</Button>
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

import React, { Component } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import MonitorTasks from './tasks/MonitorTasks'
import { Link } from 'react-router-dom'

class HomeContainer extends Component{

  state = {
    //Should be populated with actual tasks from JSON file that we create or pulled from api created by backend team
    //should be an array of task objects with three key/value pairs to match the column names on the Monitor Task Table
    //pass down to MonitorTasks component as props
    tasks: [{"name": "1", "status": "one", "description": "I"}, {"name": "2", "status": "two", "description": "II"}, {"name": "3", "status": "three", "description": "III"}, {"name": "4", "status": "four", "description": "IV"}]
  }

  updateState = () => {
    //update State with newly create tasks. pass this method down in props to the CreateNewTask component once the modal is created
  }

  handleClick = () => {
    //use this.setState to change modal visible status to true.
  }

  render(){
    return(
      <main>
          <Container fluid={true}>
              <Row noGutters={true}>
                  <Button as={Link} to="/create-new-task" id='new-task' variant="primary" onClick={this.HandleClick}>Create New Task</Button>
              </Row>
              <Row noGutters={true}>
                  <MonitorTasks tasks={this.state.tasks}/>
              </Row>
          </Container>
      </main>
    )
  }
}

export default HomeContainer;

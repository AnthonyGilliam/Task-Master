import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class CreateNewTask extends Component{
  render(){
    return(
      <Form >
        <Form.Group controlId="newTaskForm">
          <Form.Label>Name</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Name" />

          <Form.Label>Description</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Task Description" />

          <Form.Label>Priority</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Priority" />


        </Form.Group>
        //MISSING MAX RUNTIME FIELD
        <Button type="submit">
          Create Task
        </Button>
      </Form>
    )
  }

}

export default CreateNewTask;

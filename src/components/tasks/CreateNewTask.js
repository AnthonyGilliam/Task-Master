import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class CreateNewTask extends Component{
  state = {
    task: {
      name: "",
      description: "",
      priority: "",
      runTime: ""
      }
  }

  handleChange = (e) => {
    // console.log("this is e.target.value", e.target.value)
    // console.log("this is the label", e.target.name)
    this.setState({ ...this.state.task, [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //add newly created task to overall list of tasks using callback function passed down from the home container as a prop.
    alert("Your task has been created!");
  }

  
  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="newTaskForm">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" size="lg" type="text" placeholder="Name"  onChange={this.handleChange}/>

          <Form.Label>Description</Form.Label>
          <Form.Control name="description" size="lg" type="text" placeholder="Task Description" onChange={this.handleChange}/>

          <Form.Label>Priority</Form.Label>
          <Form.Control name="priority" size="lg" type="text" placeholder="Priority" onChange={this.handleChange}/>

          {
            //MISSING MAX RUNTIME FIELD
          }

        </Form.Group>
        <Button type="submit">
          Create Task
        </Button>
      </Form>
    )
  }

}

export default CreateNewTask;

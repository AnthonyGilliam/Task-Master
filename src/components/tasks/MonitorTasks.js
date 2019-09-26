import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import TableRow from './TaskRow.js'

class MonitorTask extends Component{

  state = {
    //Should be populated with actual tasks from JSON file that we create or pulled from api created by backend team
    //should be an array of task objects with three key/value pairs to match the column names on the Monitor Task Table
    tasks: [{"name": "1", "status": "one", "description": "I"}, {"name": "2", "status": "two", "description": "II"}, {"name": "3", "status": "three", "description": "III"}, {"name": "4", "status": "four", "description": "IV"}]
  }

  newRow = (task) => (
    <tr>
    <td>{task["name"]}</td>
    <td>{task["status"]}</td>
    <td>{task["description"]}</td>
    </tr>
  )//helper method. generates new table row for each task.

  generateRows = (tasks) => (
    tasks.map((task) => this.newRow(task))
  )//helper method. generates rows for all tasks held in state.


  render(){
    return(
      <Table striped bordered>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.generateRows(this.state.tasks)}
        </tbody>
      </Table>
    )
  }
}

export default MonitorTask;

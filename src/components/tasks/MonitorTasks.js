import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import TableRow from './TaskRow.js'

class MonitorTask extends Component{

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
          {this.generateRows(this.props.tasks)}
        </tbody>
      </Table>
    )
  }
}

export default MonitorTask;

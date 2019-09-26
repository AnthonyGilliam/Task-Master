import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
function TaskRow(props){
  console.log("these are the props", props)
  return(
      <tr>
        <td>props.thisTask[0]</td>
        <td>props.thisTask[1]</td>
        <td>props.thisTask[2]</td>
      </tr>
  )
}

export default TaskRow;

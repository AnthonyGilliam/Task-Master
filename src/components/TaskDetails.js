import React from 'react'
import { Table, ProgressBar } from 'react-bootstrap'


export default function TaskDetailView(props) {
    

    return (
        <div>
            <Table className="tg">
                <tbody>
                    <tr >
                        <th className="tg-0lax" colspan="2">Task Detail for : {props.taskName}</th>
                    </tr>
                    <tr >
                        <td className="tg-0lax" colspan="2"> {props.description}</td>
                    </tr>
                    <tr>
                        <td className="tg-lqy6">Start Time: {props.startTime}</td>
                        <td className="tg-0pky">End Time: {props.endTime} </td>
                    </tr>
                    <tr>
                        <td className="tg-lqy6">Status:</td>
                        <td className="tg-0pky">{props.status}</td>
                    </tr>
                    <tr>
                        <td className="tg-lqy6">Created Time:</td>
                        <td className="tg-0pky"> {props.createdTime}</td>
                    </tr>
                    <tr>
                        <td className="tg-0lax" colspan="2">
                            <ProgressBar  label={percent} now={percent} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}


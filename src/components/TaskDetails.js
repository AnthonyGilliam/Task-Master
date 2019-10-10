import React from 'react'
import { Table, ProgressBar } from 'react-bootstrap'


export default function TaskDetailView(props) {
    
    // updateTime () => int 
    //      returns percentag of time that has accured since the task was started
    let updateTime = () => {
        // Starttime and endtime should be in seconds for an accurate conversion
        let { startTime, endTime } = props;

        // 10 is the current time for testing purposed
        let currentTime = 10;

        // let currentTime = new Date().getSeconds()
        let accuredTime = getAccuredTime(currentTime,startTime)
        console.log(accuredTime)
        let runTime = getRunTime(endTime,startTime)
        console.log(runTime)
        return ((accuredTime / runTime) * 100).toFixed(2)
    }

    // getAccuredTime (int endTime, int startTime) => int 
    //      returns int of time that has past by
    let getAccuredTime = (currentTime,startTime) => {
        return currentTime > startTime ?   currentTime - startTime : 24 - startTime + currentTime ;
    }

    // getRunTime (int endTime, int startTime) => int
    //      returns int of runTime
    let getRunTime = (endTime,startTime) => {
        return endTime > startTime ? endTime - startTime : 24 - startTime + endTime
    }


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
                            <ProgressBar  className="tg-progressBar" label={`${updateTime()}%`} now={updateTime()} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}


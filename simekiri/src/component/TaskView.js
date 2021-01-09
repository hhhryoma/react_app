import React from 'react'
import ReactDOM from 'react-dom'

function TaskViewMain(props) {
    return (
        <div className="TaskViewMain">
            <label>締め切り</label>
            <TaskViewSub></TaskViewSub>
        </div>
    )
}

function TaskViewSub(props) {
    return (
        <div className="TaskViewSub">
            <label>締め切り近い</label>
            <Task></Task>
        </div>
    )
}

function Task(props) {
    return (
        <div className="Task">
            <input type="checkbox"/>
            <input/>
            <input type="date"/>
            <button type="button" name="edit" value="edit">編集</button>
        </div>
    )
}

export default TaskViewMain

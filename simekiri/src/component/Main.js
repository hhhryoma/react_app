import React, {useContext, useState} from 'react'
import TaskViewSub from "./TaskView"
import Form from "./Form.js"


function TaskViewMain(props) {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    if(tasks === null) {
        tasks = []
    }
    const [tasksState, setTasks] = useState(tasks)

    return(
        <div>
            <label>simekiri</label>
            <Form tasksState={tasksState} setTasks={setTasks}/>
            <TaskViewSub tasksState={tasksState} setTasks={setTasks}/>
            {/* <input type="button" onClick={RemoveAllTask(setTasks)} value="Remove All Task"></input> */}
        </div>
    )
}

const RemoveAllTask = (setState) => {
    localStorage.removeItem("tasks")
}

export default TaskViewMain
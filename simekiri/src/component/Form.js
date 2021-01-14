import React, {createContext, useState} from 'react';



export const Form = (props) => {
    let date = new Date()
    date.setDate(date.getDate()+1)
    const [taskName, setTaskName] = useState("task")
    const [taskDate, setTaskDate] = useState(formatDate(date, "yyyy-MM-dd"))
    const [taskTime, setTaskTime] = useState(formatDate(date, "HH:mm"))
    console.log(taskDate, taskTime)

    const AddTask = (e) => {
        e.preventDefault()
        console.log("タスクの追加処理　スタート")
        let task = {
            "name": taskName,
            "date": taskDate,
            "time": taskTime,
            "isFinished": false,
            "idx": 0
        }
        if (localStorage.getItem("tasks") === null){
            let tasks = [task]
            localStorage.setItem("tasks", JSON.stringify(tasks))
        } else {
            let tasks = JSON.parse(localStorage.getItem("tasks"))
            task.idx = tasks[tasks.length - 1].idx + 1
            tasks.push(task)
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
        props.setTasks(JSON.parse(localStorage.getItem("tasks")))
        console.log("タスクの追加処理 エンド")
    }

    return(
    <form className="form-task">
        <label>タスクの追加</label>
        <div>
            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}></input>
            <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)}></input>
            <input type="time" value={taskTime} onChange={(e) => setTaskTime(e.target.value)}></input>
            <input type="button" value="add" onClick={AddTask}></input>
        </div>
    </form>
)}



function formatDate (date, format) {
    format = format.replace(/yyyy/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
    return format;
};

export default Form
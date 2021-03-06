import React, {useContext, useState} from 'react'


// タスクごとの分類名とタスクの分類条件
const taskViewInfo = [{title: "締め切り過ぎてる", 
                        condition: (task) => {
                            const today = new Date()
                            const timeLimit = new Date(`${task.date}T${task.time}`)
                            return today.getTime() > timeLimit.getTime() && !task.isFinished
                        }}, 
                       {title: "締め切りまだ先", 
                        condition: (task) => {
                            const today = new Date()
                            const timeLimit = new Date(`${task.date}T${task.time}`)
                            return today.getTime() < timeLimit.getTime() && !task.isFinished
                        }}, 
                       {title: "完了済み", 
                        condition: (task) => (task.isFinished)}
                    ]

function TaskViewSub(props) {
    // タスクのチェックボックスが押下されたときの処理
    const ToggleTaskFinish = (idx) => {
        const toggledTasks = props.tasksState.map(task => {
            if (idx === task.idx) {
                return {...task, isFinished: !task.isFinished}
            }
            return task
        })
        props.setTasks(toggledTasks)
        console.log(`taskState: ${props.tasksState}`)
        localStorage.setItem("tasks", JSON.stringify(toggledTasks))
    }
    const taskView = taskViewInfo.map((info, idx) => 
        <div className="TaskViewSub" key={idx}>
            <label>{info.title}</label>
            {RetFilterTasks(props.tasksState, info.condition, {check: ToggleTaskFinish})}
        </div>
    )
    return (
        <>
            {taskView}
        </>
    )
}


function Task(props) {
    return (
        <div className="Task" id={props.task.idx}>
            <input type="checkbox" checked={props.task.isFinished} onChange={() => props.events.check(props.task.idx)}/>
            <input id="taskName" value={props.task.name}/>
            {// 完了済みタスクには残り時間は表示しない 
                props.task.isFinished || 
                <input id="remainingTime" value={CalcRemainingTime(props.task.date, props.task.time)}/>
            }
            <input type="date" id="period" value={props.task.date}/>
            <input type="time" value={props.task.time}></input>
            <button type="button" id="toEdit" name="edit" value="edit">edit</button>
        </div>
    )
}

function FinishedTask(props) {
    return (
        <div className="Task" id={props.task.idx}>
            <input type="checkbox" checked={props.task.isFinished} onChange={() => props.events.check(props.task.idx)}/>
            <input id="taskName" value={props.task.name}/>
            <input type="date" id="period" value={props.task.date}/>
            <input type="time" value={props.task.time}></input>
        </div>
    )
}


// タスクを与えられた条件でフィルタリング
// フィルタリングした結果をタスクのリストをJSX形式で変換
function RetFilterTasks(tasks, filterFunc, events) {
    const filteredTasks = tasks.filter(filterFunc)
    if(!filteredTasks.length){
        return (
            <p>No data</p>
        )
    }
    return (
        <ul>
            { filteredTasks.map((filteredTask, index) => (
                <li key={index}>
                    <Task task={filteredTask} events={events}/>
                </li>
            ))}
        </ul>
    )
}

// タスクの締め切りまであと何時間あるか計算する
// 残り時間数を返却する
const CalcRemainingTime = (to_day, to_time) => {
    const today = new Date()
    const to = new Date(`${to_day}T${to_time}`)
    return Math.round((to - today) / 3600000)
}


export default TaskViewSub

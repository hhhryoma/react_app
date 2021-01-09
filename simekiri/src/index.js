import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TaskViewMain from './component/TaskView'

ReactDOM.render(
  <React.StrictMode>
    <TaskViewMain />
  </React.StrictMode>,
  document.getElementById('root')
);


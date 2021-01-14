import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskViewMain from './component/Main'


ReactDOM.render(
  <React.StrictMode>
    <TaskViewMain/>
  </React.StrictMode>,
  document.getElementById('root')
);


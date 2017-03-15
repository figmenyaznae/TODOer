import React from 'react';
import ReactDOM from 'react-dom';
import TaskListContainer from './pages/TaskListContainer';

require('../scss/main.sass');
require('../index.html');

ReactDOM.render(
  <TaskListContainer />,
  document.getElementById('main')
);

import React from "react";
import TaskList from "../components/TaskList";

export default class TaskListContainer extends React.Component{
  constructor() {
    super()
    this.state = {
      tasks: [
        {id: 0, text: 'task 1', complete: true, children: [
          {id: 1, text: 'task 1 subtask 1', complete: false},
          {id: 2, text: 'task 1 subtask 2', complete: true, children: [
            {id: 3, text: 'task 1 subtask 2 subtask', complete: true},
            {id: 4, text: 'task 1 subtask 2 subtask', complete: false}
          ]}
        ]},
        {id: 5, text: 'task 2', complete: false}
      ]
    };
  }

  render() {
    return (<TaskList tasks={this.state.tasks}
              toggleOpen={this.toggleOpen.bind(this)} />);
  }
  
  findByIDFromList(taskList, taskId) {
    for (let task of taskList) {
      if (task.id==taskId){
        return task;
      }
      if (task.children) {
        let child = this.findByIDFromList(task.children, taskId);
        if (child)
          return child;
      }
    }
    return null;
  }
  
  toggleOpen(taskId) {
    var newState = Object.assign({}, this.state)
    var task = this.findByIDFromList(newState.tasks, taskId);
    if (task) {
      task.open = !task.open;
      this.setState(newState);
    }
  }
}
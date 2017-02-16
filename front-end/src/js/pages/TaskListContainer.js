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
              getDonePercent={this.getDonePercent.bind(this)}
              toggleDone={this.toggleDone.bind(this)}
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
  
  getDonePercent(taskId) {
    var task = this.findByIDFromList(this.state.tasks, taskId);
    if (task.children) {
      let s = 0;
      for (let child of task.children)
        s += this.getDonePercent(child.id);
      return s / task.children.length;
    }
    else return task.complete * 100;
  }
  
  toggleDone(taskId) {
    var newState = Object.assign({}, this.state)
    var task = this.findByIDFromList(newState.tasks, taskId);
    if (task) {
      task.complete = !task.complete;
      this.setState(newState);
    }
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
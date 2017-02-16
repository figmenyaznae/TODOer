import React from "react";
import TaskList from "./TaskList";
import Task from "./Task";

export default class TaskWrap extends React.Component{
  render() {
    const { task } = this.props;
	
    if (task.children && task.open)
      var children = <TaskList tasks={task.children}  
                       toggleOpen={this.props.toggleOpen} />;
					   
    return (<div className="media">
        <Task id={task.id} text={task.text} hasChildren={task.children!=undefined} 
          open={task.open} toggleOpen={this.props.toggleOpen} />
        { children }
      </div>);
  }
}
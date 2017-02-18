import React from "react";
import TaskList from "./TaskList";
import Task from "./Task";

export default class TaskWrap extends React.Component{
  render() {
    const { task } = this.props;
	
    if (task.children && task.open)
      var children = <TaskList parentId={task.id}
                       tasks={task.children}
                       isAppending={task.appending}
                       getDonePercent={this.props.getDonePercent}
                       toggleDone={this.props.toggleDone}
                       toggleOpen={this.props.toggleOpen}
                       toggleAppending={this.props.toggleAppending}
                       appendTask={this.props.appendTask} />;
					   
    return (<div className="media">
        <Task id={task.id}
          text={task.text}
          done={task.complete}
          open={task.open}
          hasChildren={task.children!=undefined}
          donePercent={this.props.getDonePercent(task.id)}
          toggleDone={this.props.toggleDone}
          toggleOpen={this.props.toggleOpen} />
        { children }
      </div>);
  }
}
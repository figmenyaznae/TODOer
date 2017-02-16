import React from "react";
import TaskWrap from "./TaskWrap";

export default class TaskList extends React.Component{
  render() {
    const tasks = this.props.tasks.map(
      (task) => <TaskWrap task={task}
                  getDonePercent={this.props.getDonePercent}
                  toggleDone={this.props.toggleDone}
                  toggleOpen={this.props.toggleOpen} />
    )
    return (<div className="col-md-12">
        { tasks }
      </div>);
  }
}
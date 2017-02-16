import React from "react";
import TaskWrap from "./TaskWrap";
import TaskAdd from "./TaskAdd";

export default class TaskList extends React.Component{
  render() {
    const tasks = this.props.tasks.map(
      (task) => <TaskWrap task={task}
                  getDonePercent={this.props.getDonePercent}
                  toggleDone={this.props.toggleDone}
                  toggleOpen={this.props.toggleOpen}
                  toggleAppending={this.props.toggleAppending} />
    )
    return (<div className="col-md-12">
        { tasks }
        <TaskAdd parentId={this.props.parentId}
          isAppending={this.props.isAppending}
          toggleAppending={this.props.toggleAppending} />
      </div>);
  }
}
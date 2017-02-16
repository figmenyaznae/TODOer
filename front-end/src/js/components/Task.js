import React from "react";
import FoldButton from "./FoldButton";
import CompleteButton from "./CompleteButton";
import ProgressBar from "./ProgressBar";

export default class Task extends React.Component{
  render() {
    let button = null;
    if (this.props.hasChildren)
      button = <FoldButton open={this.props.open} id={this.props.id}
                 toggleOpen={this.props.toggleOpen} />
    else 
      button = <CompleteButton done={this.props.done} id={ this.props.id }
                 toggleDone={this.props.toggleDone} />

    return (<div>
        <div className="media-body">
          <h4 className="media-heading">
            { this.props.text }
          </h4>
          { this.props.hasChildren ? <ProgressBar percent={this.props.donePercent}/> : <div/> }
        </div>
        <div className="media-right">
          { button }
        </div>
      </div>);
  }
}

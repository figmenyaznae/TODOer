import React from "react";
import FoldButton from "./FoldButton";

export default class Task extends React.Component{
  render() {
    return (<div>
        <div className="media-body">
          <h4 className="media-heading">
            { this.props.text }
          </h4>
        </div>
        <div className="media-right">
          <FoldButton open={this.props.open} id={this.props.id}
                 toggleOpen={this.props.toggleOpen} />
        </div>
      </div>);
  }
}

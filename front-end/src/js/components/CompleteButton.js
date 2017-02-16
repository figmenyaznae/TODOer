import React from "react";

export default class CompleteButton extends React.Component {
  handleClick(e) {
    this.props.toggleDone(this.props.id);
  }
  
  render() {
    let btnClass = false;
    if (this.props.done)
      btnClass = "btn btn-success";
    else
      btnClass = "btn btn-default";
    btnClass += " btn-lg";
    return (
      <div className={ btnClass }
        onClick={ this.handleClick.bind(this) }>
        <span className="glyphicon glyphicon-ok"></span>
      </div>
    );
  }
}
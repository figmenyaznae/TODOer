import React from "react";

export default class FoldButton extends React.Component{
  handleClick(e) {
    this.props.toggleOpen(this.props.id);
  }
  
  render() {
    let glyphClass = false;
    if (this.props.open)
      glyphClass = "glyphicon glyphicon-triangle-top";
    else
      glyphClass = "glyphicon glyphicon-triangle-bottom";
    return (
      <div className="btn btn-default btn-lg"
        onClick={ this.handleClick.bind(this) }>
        <span className={ glyphClass }></span>
      </div>
    );
  }
}
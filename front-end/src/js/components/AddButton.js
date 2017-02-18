import React from "react";

export default class AddButton extends React.Component{
  handleClick(e) {
    if (this.props.isAppending)
      this.props.onCancel();
    else
      this.props.toggleAppending(this.props.parentId);
  }
  
  render() {
    let btnClass = false;
    let glyphClass = false;
    if (this.props.isAppending) {
      glyphClass = "glyphicon glyphicon-remove";
      btnClass = "btn btn-danger";
    }
    else {
      glyphClass = "glyphicon glyphicon-plus";
      btnClass = "btn btn-success";
    }
    return (<div className={ btnClass }
            onClick={this.handleClick.bind(this)} >
            <span className={ glyphClass }>
            </span>
          </div>);
  }
}
import React from "react";
import AddButton from "./AddButton";

export default class TaskAdd extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleAdd(event) {
    this.props.appendTask(this.props.parentId, this.state.value);
    this.state = {value: ''};
    this.props.toggleAppending(this.props.parentId);
  }
  
  handleCancel(event) {
    this.state = {value: ''};
    this.props.toggleAppending(this.props.parentId);
  }
  
  render() {
    let visibility = {
      visibility: (this.props.isAppending ? "visible" : "hidden")
    };
    
    return (<div className="media">
    
        <div className="media-left">
          <AddButton toggleAppending={this.props.toggleAppending}
            parentId={this.props.parentId}
            isAppending={this.props.isAppending}
            onCancel={this.handleCancel.bind(this)} />
        </div>
        
        <div className="media-body" style={ visibility }>
          <input type="text" className="form-control"
            value={this.state.value} onChange={this.handleChange.bind(this)} />
        </div>
        
        <div className="media-right" style={ visibility }>
          <div className="btn btn-success" onClick={this.handleAdd.bind(this)}>
           <span className="glyphicon glyphicon-ok">
           </span>
          </div>
        </div>
        
      </div>);
  }
}
import React from "react";
import AddButton from "./AddButton";

export default class TaskAdd extends React.Component{
  render() {
    let visibility = {
      visibility: (this.props.isAppending ? "visible" : "hidden")
    };
    
    return (<div className="media">
    
        <div className="media-left">
          <AddButton toggleAppending={this.props.toggleAppending}
            parentId={this.props.parentId}
            isAppending={this.props.isAppending} />
        </div>
        
        <div className="media-body" style={ visibility }>
          <input type="text" className="form-control" />
        </div>
        
        <div className="media-right" style={ visibility }>
          <div className="btn btn-success">
           <span className="glyphicon glyphicon-ok">
           </span>
          </div>
        </div>
        
      </div>);
  }
}
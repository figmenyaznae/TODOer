import React from "react";

export default class ProgressBar extends React.Component{
  render() {
    return (<div>
      <div className="progress" style={{ "margin-bottom": '-20px' }}>
        <div className="progress-bar progress-bar-success"
          role="progressbar" style={{
            width: this.props.percent+'%'
          }}>
        </div>
      </div>
      <div className="col-md-12 text-center" style={{ "margin-bottom": '20px' }}>
        <strong>
          { this.props.percent }%
        </strong>
      </div>
    </div>);
  }
}
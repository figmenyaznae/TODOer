import React from "react";

export default class ProgressBar extends React.Component{
  render() {
    const style = { width: this.props.percent+'%' };
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      maximumFractionDigits: 2,
    });
    
    return (<div>
      <div className="progress" style={{ marginBottom: '-20px' }}>
        <div className="progress-bar progress-bar-success"
          role="progressbar" style={style} />
      </div>
      <div className="col-md-12 text-center" style={{ marginBottom: '20px' }}>
        <strong>
          { formatter.format(this.props.percent) }%
        </strong>
      </div>
    </div>);
  }
}
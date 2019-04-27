import React from 'react';

function CountLabel(props) {
  let count = 0;
  for (let item of props.offspring) {
    if (item === props.type) {
      count++;
    }
  }
  return (
    <span>{count} {props.type}</span>
  );
}

class GenoRatio extends React.Component {
    renderCount(type, os) {
      return <CountLabel type={type} offspring={os} />;
    }
    render() {
      return (
        <div>
        {this.renderCount('YY', this.props.offspring)} :&nbsp;
        {this.renderCount('Yy', this.props.offspring)} :&nbsp;
        {this.renderCount('yy', this.props.offspring)}
        </div>
      );
    }
}

export default GenoRatio;
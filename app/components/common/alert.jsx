import React from 'react';


export default class Alert extends React.Component {
  render() {
    if (!this.props.visible)
      return null;

    return (
      <div className={'alert alert-' + this.props.type}>
       {this.props.children}
      </div>
    );
  }
}

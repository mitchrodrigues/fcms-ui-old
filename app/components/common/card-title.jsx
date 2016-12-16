import React from 'react';

export default class CardTitle extends React.Component {
  render() {
    return (
      <div className={'card-title'} dataTarget={this.props.dataTarget || ''}>
		{this.props.children}
      </div>
    );
  }
}
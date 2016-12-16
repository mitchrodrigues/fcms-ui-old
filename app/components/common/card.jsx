import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div id={this.props.id} className={'card ' + this.props.className}> 
        {this.props.children}
      </div>
    );
  }
}

class CardTitle extends React.Component {
  toggle() {
    if (!(this.props.target && this.props.toggle))
      return true;

    switch (this.props.toggle) {
      case 'class':
        $(this.props.target).toggleClass(this.props.toggle);
        break;
      case 'link':
        this.context.router.push(this.props.target);
        break;
    }
    return false;
  }

  render() {
    return (
    <div className='card-header' onClick={this.toggle.bind(this)}>
      <div className='card-title'>
        {this.props.children}
      </div>
    </div>
    );
  }
}

class CardBlock extends React.Component {
  render() {
    return (
      <div id={this.props.id} className={'card-block ' + (this.props.className || '')}>
       {this.props.children}
      </div>
    );
  }
}

Card.contextTypes = {
  router: React.PropTypes.func.isRequired
};

CardTitle.contextTypes = {
  router: React.PropTypes.func.isRequired
};

CardBlock.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export {Card, CardTitle, CardBlock};

import React from 'react';


export default class Actions extends React.Component {
  render() {
    return (
       <div className={'actions ' + (this.props.className || '')}>
         <div className='pull-right'>
           {this.props.children}         
         </div>
         <div className='clearfix' />
       </div>
    );
  }
}


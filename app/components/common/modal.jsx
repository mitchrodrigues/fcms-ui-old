import React from 'react';


class Modal extends React.Component {
  render() {
    return (
      <div  className={'modal fade ' + this.props.className}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
           {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

class ModalHeader extends React.Component {
  render() {
    return (
      <div className="modal-header">
        {this.props.children}
      </div>
    );
  }
}


class ModalBody extends React.Component {
  render() { 
    return (
      <div className="modal-body">
        {this.props.children}
      </div>
    );
  }
}


class ModalFooter extends React.Component {
  render() { 
    return (
      <div className="modal-footer">
        {this.props.children}
      </div>
    );
  }
}


export { Modal, ModalBody, ModalHeader, ModalFooter }



import React, {Component} from 'react';

import './Modal.css';
import BackDrop from '../Backdrop/Backdrop';

class Modal extends Component
{ 
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  render() {
    let show = this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
    let opacity= this.props.show ? '1' : '0'
    let style = {
      transform: show,
      opacity: opacity
    }
    return <>
      <BackDrop show={this.props.show} clicked={this.props.modalClosed}></BackDrop>
      <div className="Modal"
        style={style}>
        {this.props.children}
      </div>
    </>
  }

}
  


export default Modal;
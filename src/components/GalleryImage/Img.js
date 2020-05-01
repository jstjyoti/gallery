import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';
import Like from '../Like/Like';
class Img extends Component{
  state = {
    liked: false,
    zoomed: false
  }
  zoomedHandler = () =>{
    const temp = {...this.state};
    this.setState({zoomed: !temp.zoomed});
  }
  likeHandler = () =>{
    const temp = {...this.state};
    this.setState({liked: !temp.liked});
  }
  render(){
    return <li>
    <a href={this.props.modalOpen} className="img-wrap ">
      <Like click={this.likeHandler} colored={this.state.liked ? '#ff0000' : '#dddddd'}></Like>
      <img src={this.props.url} onClick={this.zoomedHandler} alt="Unsplash Image here" />
      <Modal show={this.state.zoomed} modalClosed={this.zoomedHandler}>
        <img src={this.props.url} onClick={this.zoomedHandler} alt="Unsplash Image here" /> 
      </Modal>
    </a>
    <p>
      Photo by
      <a href={this.props.user}>{this.props.name}</a>
      <a href={this.props.link}>Source</a>
    </p>
  </li>;
  }
  
}
	

export default Img;
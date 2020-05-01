import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';
import Like from '../Like/Like';
class Img extends Component{
  state = {
    liked: false,
    showZoomIn: false,
    showZoomOut: false,
    isZoomed: false,
    styleScale: {
      x: 0,
      y: 0
    }
  }
  zoomIn = () => {
    let styleScalex = this.state.styleScale.x + 0.5, styleScaley=this.state.styleScale.y + 0.5;
    this.setState({ isZoomed: true, showZoomInstyleScale: {x: styleScalex, y: styleScaley }});
  }
  
  zoomOut = () => {
    let styleScalex = this.state.styleScale.x - 0.5, styleScaley=this.state.styleScale.y - 0.5;
    this.setState({ isZoomed: false, showZoomInstyleScale: {x: styleScalex, y: styleScaley }});  }
  enableZoom = () => {
    const temp = {...this.state}
    this.setState({showZoomIn: !temp.showZoomIn, showZoomOut: !temp.showZoomOut});
  }
  likeHandler = () =>{
    const temp = {...this.state};
    this.setState({liked: !temp.liked});
  }
  render(){
    let zoom = this.state.showZoomIn ? <span className="zoomer-after" onClick={this.zoomIn}><i className=" fa fa-search-plus " style={{fontSize: '16px'}} disabled={!this.state.showZoomIn}></i>
        </span> : <span className="zoomer-hide"></span>
        
         
    return <li>
    <div className="img-wrap ">
      <Like click={this.likeHandler} colored={this.state.liked ? '#ff0000' : '#aaaaaa'}></Like>
      
      <img src={this.props.url} onClick={this.enableZoom} style={{'cursor': 'zoom-in'}} alt="Unsplash pictures here" />
      {zoom}
      {this.state.isZoomed ? <Modal show={this.state.isZoomed} modalClicked={this.zoomOut}>
        <img src={this.props.url} onClick={this.enableZoom} style={{'cursor': 'zoom-in'}} alt="Unsplash pictures here" />
        <span className="zoomer-above" onClick={this.zoomOut}><i className=" fa fa-search-minus " style={{fontSize: '16px'}} disabled={!this.state.showZoomOut}></i>
        </span>
      </Modal>: <></>}
    </div>
    <p>
      Photo by
      <a href={this.props.user}>{this.props.name}</a>
      <a href={this.props.link}>Source</a>
    </p>
  </li>;
  }
  
}
	

export default Img;
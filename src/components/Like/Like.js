import React from 'react';
import './Like.css';

const Like = (props) =>{
 return  <span className="Like" onClick={props.click} style={{color: props.colored}}><i className="fa fa-heart heart" style={{fontSize:'30px'}}></i></span>
}

export default Like;
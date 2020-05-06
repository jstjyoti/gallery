import React, {Component} from 'react';
import './Home.css';

const home = () =>{
    //screen for home route
    return <div className="home-main">
        
        <div className="desc">
            <h1>
                A Photo Exhibtion Place
            </h1>
            <sub>powered by photographers of UnSplash</sub>
            <p>
                This is a Gallery Application Build in React for showing themed photographs you search.
                The App starts with images of night as default case.
            </p>
            <h4>Go to Gallery on top Toolbar and please you eyes with mesmerising pictures of amzing photographers</h4>
        </div>
        <footer>
            made with <i className="fa fa-heart red"></i> By Jyoti Mishra
        </footer>
    </div>
}

export default home;
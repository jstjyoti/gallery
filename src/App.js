import React, {Component} from 'react';

import './App.css';
import Gallery from './containers/Gallery/Gallery';
import { Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Toolbar from '../src/components/UI/Toolbar/Toolbar';

class App extends Component{
  state = {
    showSideDrawer: false
  }
  sideDrawerHandler = () => {
    this.setState({showSideDrawer: true});
  }
  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});

  }
  render(){

    return (
      <>
        <Route path='/' exact  component={Home}></Route>
        <Route path='/gallery'  component={Gallery}></Route>
        <Toolbar toggledrawer={this.sideDrawerHandler}></Toolbar>
      </>
    );
  }
  
}

export default App;

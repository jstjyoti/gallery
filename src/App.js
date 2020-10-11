import React, { Component } from 'react';

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Globalstyles";
import { lightTheme, darkTheme } from "./components/Themes"
import './App.css';
import Gallery from './containers/Gallery/Gallery';
import { Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Toolbar from '../src/components/UI/Toolbar/Toolbar';

class App extends Component{
  state = {
    showSideDrawer: false,
    theme: 'light'
  }

  themeToggler = () => {
    this.state.theme === 'light' ? this.setState({ theme: 'dark'}) : this.setState({ theme: 'light'});
  }

  sideDrawerHandler = () => {
    this.setState({showSideDrawer: true});
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});

  }
  render(){

    return (
      <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>

        <>
          <GlobalStyles/>

          <button onClick={this.themeToggler} className="Theme">Switch Theme</button>

          <Route path='/' exact  component={Home}></Route>
          <Route path='/gallery'  component={Gallery}></Route>
          <Toolbar toggledrawer={this.sideDrawerHandler}></Toolbar>
        </>

      </ThemeProvider>
    );
  }
  
}

export default App;

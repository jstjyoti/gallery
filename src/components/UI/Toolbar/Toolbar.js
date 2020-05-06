import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';


const toolbar = (props) => {
  return <header className="Toolbar">
    <div className="Logo">
      MyGallery
    </div>
    <nav className="DesktopOnly">
      <NavigationItems></NavigationItems>
    </nav>
  </header>
};

export default toolbar;
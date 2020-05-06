import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () =>(
  <ul className="NavigationItems">
    <NavigationItem link='/' exact>Home</NavigationItem>
    <NavigationItem link='/gallery' exact>Gallery</NavigationItem>
  </ul>
);

export default navigationItems;
import React from 'react';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem
            link="#home"
        >Home</NavigationItem>
        {/* <NavigationItem
            link="/about"
        >About Me</NavigationItem> */}
        <NavigationItem
            link="#experience"
        >Experience</NavigationItem>
    </ul>
);

export default navigationItems;
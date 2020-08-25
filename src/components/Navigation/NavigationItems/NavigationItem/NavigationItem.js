import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    let elementClasses = props.isSelected ? classes.active : '';

    // if(props.)

    return <li id={props.elementId} className={classes.NavigationItem}>
        <a href={props.link}>{props.children}</a>
        {/* <NavLink 
            exact
            to={props.link}
            activeClassName={classes.active}
        >{props.children}</NavLink> */}
    </li>
};

export default navigationItem;
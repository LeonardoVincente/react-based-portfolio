import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    let elementClasses = props.isSelected ? classes.active : '';

    return <li className={classes.NavigationItem}>
        <a className={elementClasses} href={props.link}>{props.children}</a>
    </li>
};

export default navigationItem;
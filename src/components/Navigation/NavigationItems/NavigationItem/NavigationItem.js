import React from 'react';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    let elementClasses = props.isSelected ? classes.active : '';
    return <li onClick={()=>{props.onClick(props.link)}} className={classes.NavigationItem}>
        <a className={elementClasses} href={props.link}>{props.children}</a>
    </li>
};

export default navigationItem;
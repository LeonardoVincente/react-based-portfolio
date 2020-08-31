import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.mainContainer}>
            {props.children}    
        </div>
    )
}

export default Card;

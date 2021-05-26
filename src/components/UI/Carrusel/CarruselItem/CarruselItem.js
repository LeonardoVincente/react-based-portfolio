import React from 'react';
import classes from './CarruselItem.module.css';

export default function CarruselItems({ image }) {
    return (
        <div className={classes.container} >
            <img height="100%" width="100%" src={image} />
        </div>
    );
}
import React from 'react';
import classes from './CarruselItem.module.css';

export default function CarruselItems({ image }) {
    return (
        <div className={classes.container} >
            <img className={classes.imageCont} src={image} />
        </div>
    );
}
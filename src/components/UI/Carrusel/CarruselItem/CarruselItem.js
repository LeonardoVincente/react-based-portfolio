import React from 'react';
import classes from './CarruselItem.module.css';

export default function CarruselItems({ image }) {
    return (
        <div className={classes.container} >
            Carrusel Item: {image}
        </div>
    );
}
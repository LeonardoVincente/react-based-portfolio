import React from 'react';
import classes from './CarruselIndexIndicator.module.css';

export default function CarruselIndexIndicator({ index, length }) {
    const dots = [];

    for (let i = 0; i < length; i++) {
        const classNames = index == i ? [classes.dot, classes.selected].join(' ') : classes.dot;
        dots.push(<div key={i} className={classNames}></div>);
    }
    return <div className={classes.container}>{dots}</div>
}
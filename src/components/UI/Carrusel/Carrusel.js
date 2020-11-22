import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import classes from './Carrusel.module.css';

export default function Carrusel({ children }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const carruselItemToDisplay = children[currentIndex];
    const leftArrowClasses = [classes.leftArrow, classes.arrowIcon].join(' ');
    const rightArrowClasses = [classes.rightArrow, classes.arrowIcon].join(' ');
    return (
        <div className={classes.container} >
            <div className={rightArrowClasses}>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </div>
            <ArrowBackIosIcon className={leftArrowClasses}></ArrowBackIosIcon>
            {carruselItemToDisplay}
        </div>
    );
}
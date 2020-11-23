import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import CarruselIndexIndicator from './CarruselIndexIndicator/CarruselIndexIndicator';
import classes from './Carrusel.module.css';

const rightArrowClicked = (currentIndex, numberOfChildren, setCurrentIndex) => {
    const newIndex = (currentIndex + 1) % numberOfChildren;
    setCurrentIndex(newIndex);
}


const leftArrowClicked = (currentIndex, numberOfChildren, setCurrentIndex) => {
    const newIndex = currentIndex === 0 ? numberOfChildren - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
}

export default function Carrusel({ children }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const carruselItemToDisplay = children[currentIndex];
    const leftArrowClasses = [classes.leftArrow, classes.arrowIcon].join(' ');
    const rightArrowClasses = [classes.rightArrow, classes.arrowIcon].join(' ');

    const progressClasses = [classes.progressContainer, classes.progressLarge].join(' ');


    return (
        <div className={classes.container} >
            <div className={rightArrowClasses} onClick={() => rightArrowClicked(currentIndex, children.length, setCurrentIndex)}>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </div>
            <div className={leftArrowClasses}
                onClick={() => leftArrowClicked(currentIndex, children.length, setCurrentIndex)}
            >
                <ArrowBackIosIcon></ArrowBackIosIcon>
            </div>
            <div className={progressClasses}>
                <CarruselIndexIndicator length={children.length} index={currentIndex}/>
            </div>
            {carruselItemToDisplay}
        </div>
    );
}
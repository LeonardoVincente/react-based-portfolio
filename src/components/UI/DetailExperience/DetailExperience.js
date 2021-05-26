import React, { useEffect, useRef } from 'react';

import classes from './DetailExperience.module.css';
import Carrusel from '../Carrusel/Carrusel';
import CarruselItem from '../Carrusel/CarruselItem/CarruselItem';


function manageCardClick(event) {
    event.stopPropagation();
}

function onKeydownManager(event, onClose) {
    if (event.key === "Escape") {
        onClose();
    }
}

const DetailExperience = ({ experienceInfo, onClose }) => {
    const carruselItems = experienceInfo.detailed.projects[0].images.map((image,index) => {
        return <CarruselItem key={index} image={image}></CarruselItem>
    });

    const closeButtonRef = useRef(null);

    useEffect(() => {
        closeButtonRef.current.focus();
    })

    return (
        <React.Fragment>
            <div className={classes.experienceDetail} onClick={onClose} onKeyDown={(e) => onKeydownManager(e, onClose)}>
                <div className={classes.detailCard} onClick={manageCardClick}>
                    <button aria-label='Close' ref={closeButtonRef} className={classes.closeButton} onClick={onClose}>X</button>
                    <div className={classes.header}>
                        <div className={classes.companyName}>
                            {experienceInfo.company}
                        </div>
                        <div className={classes.title}>
                            {experienceInfo.jobTitle}
                        </div>
                    </div>
                    <div className={classes.contentContainer}>
                        <div className={classes.description}>
                            {experienceInfo.detailed.longDescription}
                        </div>
                        <div className={classes.projects}>
                            <div className={classes.carruselContainer}>
                                <Carrusel >
                                    {carruselItems}
                                </Carrusel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DetailExperience;
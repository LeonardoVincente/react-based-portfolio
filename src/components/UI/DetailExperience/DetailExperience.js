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
    const techStack = experienceInfo.detailed.techStack.map((tech) => {
        return <li>{tech}</li>
    });

    const closeButtonRef = useRef(null);

    useEffect(() => {
        closeButtonRef.current.focus();
    })

    return (
        <React.Fragment>
            <div  className={classes.experienceDetail} onClick={onClose} onKeyDown={(e) => onKeydownManager(e, onClose)}>
                <div className={classes.detailCard} onClick={manageCardClick}>
                    <button ref={closeButtonRef} className={classes.closeButton} onClick={onClose}>X</button>
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
                                    <CarruselItem image={experienceInfo.detailed.projects[0].images[0]}></CarruselItem>
                                    <CarruselItem image={experienceInfo.detailed.projects[0].images[1]}></CarruselItem>
                                    <CarruselItem image={experienceInfo.detailed.projects[0].images[2]}></CarruselItem>
                                    <CarruselItem image={experienceInfo.detailed.projects[0].images[2]}></CarruselItem>
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
import React from 'react';

import Card from '../Card/Card';
import classes from './ExperienceCard.module.css';

const ExperienceCard = (props) => {
    const companyLogoClasses = [classes.companyLogo];

    return (
        <Card>
            {/* <div className={classes.experienceCardContainer}>
                
            </div> */}

            <div className={classes.jobCard}>
                <div className={classes.jobSummary}>
                    <div className={companyLogoClasses.join(' ')}></div>
                    <div class={classes.companyInfo}>
                        <div><b>Thermofisher Scientific - Software Engineer</b></div>
                        <div>January 2019 - Present</div>
                    </div>
                </div>
                <div className={classes.jobDescription}>Working with Angular/Typescript for the Front End and Restful
                            backend microservices with Java. </div>
            </div>
        </Card>
    );
};

export default ExperienceCard;
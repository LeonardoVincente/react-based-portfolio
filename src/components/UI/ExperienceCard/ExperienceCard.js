import React from 'react';

import Card from '../Card/Card';
import classes from './ExperienceCard.module.css';

const getCompanyLogo = (company) => {
    switch (company) {
        case 'Thermofisher Scientific':
            return classes.thermoFisherLogo;
        case 'Argus Telematics':
            return classes.argusTelematics;
    }
}


const ExperienceCard = (props) => {
    const companyLogoClasses = [classes.companyLogo];


    const companyLogo = getCompanyLogo(props.experienceData.company);

    companyLogoClasses.push(companyLogo);

    return (
        <Card>
            <div className={classes.jobCard}>
                <div className={classes.jobSummary}>
                    <div className={companyLogoClasses.join(' ')}></div>
                    <div class={classes.companyInfo}>
                        <div><b>{props.experienceData.company} - {props.experienceData.jobTitle}</b></div>
                        <div>{props.experienceData.startDate} - {props.experienceData.endDate}</div>
                    </div>
                </div>
                <div className={classes.jobDescription}>
                    {props.experienceData.jobDescription}
                </div>
            </div>
        </Card>
    );
};

export default ExperienceCard;
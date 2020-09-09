import React from 'react';

import Card from '../Card/Card';
import classes from './ExperienceCard.module.css';

const getCompanyLogo = (company) => {
    switch (company) {
        case 'Facebook Inc.':
            return classes.facebookLogo;
        case 'Thermofisher Scientific':
            return classes.thermoFisherLogo;
        case 'Sumsung Electronics':
            return classes.samsungLogo;
        case 'Argus Telematics':
            return classes.argusTelematics;
    }
}


const ExperienceCard = (props) => {
    const companyLogoClasses = [classes.companyLogo];
    const companyLogo = getCompanyLogo(props.experienceData.company);
    companyLogoClasses.push(companyLogo);

    const moreInfoClasses = [classes.moreInfo, classes.moreInfoShowing];

    const cardHover = () => {
        console.log('Inside hover');
        moreInfoClasses.pop();
        // moreInfoClasses.push(classes.moreInfo);
        moreInfoClasses.push(classes.moreInfoShowing);
    };

    const cardExitHover = () => {
        console.log("Exiting hover");
        moreInfoClasses.pop();
        // moreInfoClasses.push(classes.moreInfo);
        moreInfoClasses.push(classes.moreInfoHidden);
    };

    return (
        <Card>
            <div
                className={classes.jobCard}
                onMouseEnter={() => cardHover()}
                onMouseLeave={() => cardExitHover()}
            >
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
                <div className={moreInfoClasses.join(' ')}>Hello</div>
            </div>
        </Card>
    );
};

export default ExperienceCard;
import React, { useState } from 'react';

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
    const [cardHovered, setCardHovered] = useState(false);
    const companyLogoClasses = [classes.companyLogo];
    const companyLogo = getCompanyLogo(props.experienceData.company);
    companyLogoClasses.push(companyLogo);

    const moreInfoClasses = [classes.moreInfo, classes.moreInfoShowing];

    const cardHover = () => {
        console.log('Inside hover');
        moreInfoClasses.pop();
        // moreInfoClasses.push(classes.moreInfo);
        moreInfoClasses.push(classes.moreInfoShowing);
        // setCardHovered(true);
    };

    const cardExitHover = () => {
        console.log("Exiting hover");
        // moreIn
        moreInfoClasses.pop();
        // moreInfoClasses.push(classes.moreInfo);
        moreInfoClasses.push(classes.moreInfoHidden);
        // setCardHovered(false);
    };

    return (
        <Card>
            <div
                className={classes.cardContainer}
                onMouseEnter={() => cardHover()}
                onMouseLeave={() => cardExitHover()}
            >
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
                <div className={moreInfoClasses.join(' ')}>Hello</div>
            </div>
        </Card>
    );
};

export default ExperienceCard;
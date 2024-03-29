import React from 'react';

import Card from '../Card/Card';
import classes from './ExperienceCard.module.css';
import { ReactComponent as Logo } from '../../../assets/images/loupe-black-18dp.svg';

const getCompanyLogo = (company) => {
    switch (company) {
        case 'Meta Platforms Inc.':
            return classes.metaLogo;
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
    const infoButton = window.innerHeight > 700 ? <div className={classes.moreInfo}>
        <div className={classes.moreInfoButton} onClick={() => props.onMoreButtonClick(props.experienceData)}>
            <Logo />
            <span>
                More Info
        </span>
        </div>
    </div> : null;

    return (
        <Card>
            <div className={classes.cardContainer}>
                <div className={classes.jobCard}>
                    <div className={classes.jobSummary}>
                        <div className={companyLogoClasses.join(' ')}></div>
                        <div className={classes.companyInfo}>
                            <div><b>{props.experienceData.company} - {props.experienceData.jobTitle}</b></div>
                            <div>{props.experienceData.startDate} - {props.experienceData.endDate}</div>
                        </div>
                    </div>
                    <div className={classes.jobDescription}>
                        {props.experienceData.jobDescription}
                    </div>
                    {infoButton}
                </div>
            </div>
        </Card>
    );
};

export default ExperienceCard;
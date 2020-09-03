import React from 'react';

import classes from './Experience.module.css';
import ExperienceCard from '../../components/UI/ExperienceCard/ExperienceCard';

const Experience = (props) => {
    const experienceJobs = [
        {
            company: 'Thermofisher Scientific',
            jobTitle: 'Software Engineer',
            startDate: 'January 2019',
            endDate: 'Present',
            jobDescription: 'Working with Angular/Typescript for the Front End and Restful backend microservices with Java.',
            companyLogo: '',
            logoBGColor: ''
        }
    ];

    return (
        <div id="experience" className={classes.mainContainer}>
            <div className={classes.experienceCardContainer}>
                <ExperienceCard experienceData={experienceJobs[0]}></ExperienceCard>
            </div>
        </div>
    );
}

export default Experience;
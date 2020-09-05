import React from 'react';

import classes from './Experience.module.css';
import ExperienceCard from '../../components/UI/ExperienceCard/ExperienceCard';

const Experience = (props) => {
    const experienceJobs = [
        {
            company: 'Facebook Inc.',
            jobTitle: 'Software Engineer',
            startDate: 'August 2020',
            endDate: 'Present',
            jobDescription: 'Currently in bootcamp.',
            logoBGColor: 'gray'
        },
        {
            company: 'Thermofisher Scientific',
            jobTitle: 'Software Engineer',
            startDate: 'January 2019',
            endDate: 'July 2020',
            jobDescription: 'Working with Angular/Typescript for the Front End and Restful backend microservices with Java.',
            logoBGColor: 'red'
        },
        {
            company: 'Sumsung Electronics',
            jobTitle: 'Software Engineer',
            startDate: 'February 2015',
            endDate: 'December 2017',
            jobDescription: 'Worked as a Web Developer using AngularJS or Vanilla Javascript. Developed for Android applications using Java.',
            logoBGColor: 'gray'
        },
        {
            company: 'Argus Telematics',
            jobTitle: 'Front End Developer',
            startDate: 'May 2014',
            endDate: 'February 2015',
            jobDescription: 'Worked as a Front End Developer using Polymer library for web components. Also worked on some backend services using C#.',
            logoBGColor: 'gray'
        }
    ];

    const experienceCards = experienceJobs.map(experienceData => (
        <div className={classes.experienceCardContainer}>
            <ExperienceCard experienceData={experienceData}></ExperienceCard>
        </div>
    ))

    return (
        <div id="experience" className={classes.mainContainer}>
            {experienceCards}
        </div>
    );
}

export default Experience;
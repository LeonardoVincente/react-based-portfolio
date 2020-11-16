import React from 'react';
import {
    atom,
    useSetRecoilState,
} from 'recoil';

import classes from './Experience.module.css';
import ExperienceCard from '../../components/UI/ExperienceCard/ExperienceCard';

const experienceJobs = [
    {
        company: 'Facebook Inc.',
        jobTitle: 'Software Engineer',
        startDate: 'August 2020',
        endDate: 'Present',
        jobDescription: 'Currently in bootcamp.',
        logoBGColor: 'gray',
        detailed:{
            longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
    },
    {
        company: 'Thermofisher Scientific',
        jobTitle: 'Software Engineer',
        startDate: 'January 2019',
        endDate: 'July 2020',
        jobDescription: 'Working with Angular/Typescript for the Front End and Restful backend microservices with Java.',
        logoBGColor: 'red',
        detailed:{
            longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
    },
    {
        company: 'Sumsung Electronics',
        jobTitle: 'Software Engineer',
        startDate: 'February 2015',
        endDate: 'December 2017',
        jobDescription: 'Worked as a Web Developer using AngularJS or Vanilla Javascript. Developed for Android applications using Java.',
        logoBGColor: 'gray',
        detailed:{
            longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
    },
    {
        company: 'Argus Telematics',
        jobTitle: 'Front End Developer',
        startDate: 'May 2014',
        endDate: 'February 2015',
        jobDescription: 'Worked as a Front End Developer using Polymer library for web components. Also worked on some backend services using C#.',
        logoBGColor: 'gray',
        detailed:{
            longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
    }
];

export const experienceAtom = atom({
    key: 'experienceState',
    default: null,
});

const Experience = (props) => {
    const setCurrentExperience = useSetRecoilState(experienceAtom);
    const clickOnButton = (experienceData) => {
        setCurrentExperience(experienceData);
    }

    const experienceCards = experienceJobs.map(experienceData => {
        let experienceDataClass = classes.experienceCardContainer;
        return (
            <div key={experienceData.company} className={experienceDataClass}>
                <ExperienceCard
                    experienceData={experienceData}
                    onMoreButtonClick={clickOnButton}
                ></ExperienceCard>
            </div>);
    });

    return (
        <div id="experience" className={classes.mainContainer}>
            <div className={classes.sectionTtle}>
                <span>Job Experience</span>
            </div>
            <div className={classes.experienceCards}>
                {experienceCards}
            </div>
        </div>
    );
}

export default Experience;
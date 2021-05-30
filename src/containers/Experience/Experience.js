import React from 'react';
import {
    atom,
    useSetRecoilState,
} from 'recoil';

import classes from './Experience.module.css';
import ExperienceCard from '../../components/UI/ExperienceCard/ExperienceCard';
import whatsapp2 from './project-images/whatsapp-web7.jpeg';
import whatsapp3 from './project-images/whatsapp-web6.jpeg';
import whatsapp8 from './project-images/whatsapp-web8.jpeg';

import thermo1 from './project-images/thermo7.png';
import thermo3 from './project-images/thermo3.jpeg';
import thermo4 from './project-images/thermo8.png';
import thermo5 from './project-images/thermo5.webp';

import samsung1 from './project-images/samsung1.jpeg';
import samsung3 from './project-images/samsung3.webp';
import samsung4 from './project-images/samsung4.webp';

import zeek1 from './project-images/zeek1.svg';
import zeek2 from './project-images/zeek2.svg';
import zeek3 from './project-images/zeek4.jpeg';

const experienceJobs = [
    {
        company: 'Facebook Inc.',
        jobTitle: 'Software Engineer',
        startDate: 'August 2020',
        endDate: 'Present',
        jobDescription: 'Worked in WhatsApp web application, improving and building for over 200 Million active users',
        logoBGColor: 'gray',
        detailed: {
            longDescription: `Working with React JS to bring the best experience to millions of active users.
                              Worked on adding accessability improvements to help users to use the application.
                              Also worked with bringing new features with quality and best practices in mind.`,
            projects: [
                {
                    title: 'Some title',
                    description: 'short description',
                    techStack: [
                        'javascript'
                    ],
                    images: [whatsapp2, whatsapp8, whatsapp3]
                }
            ],
            techStack: [
                'Javascript',
                'React',
                'Jest',
                'React Testing Library',
                'Electron',
                'Sass'
            ]
        }
    },
    {
        company: 'Thermofisher Scientific',
        jobTitle: 'Software Engineer',
        startDate: 'January 2019',
        endDate: 'July 2020',
        jobDescription: 'Working with Angular/Typescript for the Front End and Restful backend microservices with Java. Worked using TDD and agile methodology.',
        logoBGColor: 'red',
        detailed: {
            longDescription: '',
            projects: [
                {
                    title: 'Some title',
                    description: 'short description',
                    techStack: [
                        'javascript'
                    ],
                    images: [thermo1, thermo3, thermo4, thermo5]
                }
            ],
            techStack: [
                'Javascript',
                'React',
                'Jest',
                'React Testing Library',
                'Electron',
                'Sass'
            ]
        }
    },
    {
        company: 'Sumsung Electronics',
        jobTitle: 'Software Engineer',
        startDate: 'February 2015',
        endDate: 'December 2017',
        jobDescription: 'Worked as a Web Developer using AngularJS or Vanilla Javascript building applications for Smart TV\'s. Developed for Android applications using Java.',
        logoBGColor: 'gray',
        detailed: {
            longDescription: '',
            projects: [
                {
                    title: 'Some title',
                    description: 'short description',
                    techStack: [
                        'javascript'
                    ],
                    images: [samsung3, samsung1, samsung4]
                }
            ],
            techStack: [
                'Javascript',
                'React',
                'Jest',
                'React Testing Library',
                'Electron',
                'Sass'
            ]
        }
    },
    {
        company: 'Argus Telematics',
        jobTitle: 'Front End Developer',
        startDate: 'May 2014',
        endDate: 'February 2015',
        jobDescription: 'Worked as a Front End Developer introducing modern web framework Polymer library for web components. Also worked on some backend services using C#.',
        logoBGColor: 'gray',
        detailed: {
            longDescription: '',
            projects: [
                {
                    title: 'Some title',
                    description: 'short description',
                    techStack: [
                        'javascript'
                    ],
                    images: [zeek2, zeek1, zeek3]
                }
            ],
            techStack: [
                'Javascript',
                'React',
                'Jest',
                'React Testing Library',
                'Electron',
                'Sass'
            ]
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
import React from 'react';

import classes from './TechStack.module.css';
import reactLogo from './tech_stack/react.svg';
import angularLogo from './tech_stack/angular.svg';
import sassLogo from './tech_stack/sass.png';
import jestLogo from './tech_stack/jest.png';
import jasmineLogo from './tech_stack/jasmine.png';
import javaLogo from './tech_stack/java.png';
import restLogo from './tech_stack/rest.png';
import nodeLogo from './tech_stack/node.png';
import expressLogo from './tech_stack/express.jpeg';
import androidLogo from './tech_stack/android.png';
import kotlinLogo from './tech_stack/kotlin.png';
import awsLogo from './tech_stack/aws.png';
import jenkinsLogo from './tech_stack/jenkins.png';
import dockerLogo from './tech_stack/docker.png';
import datadogLogo from './tech_stack/datadog.svg';


const categories = [
    {
        name: 'Front End',
        list: [
            {
                displayName: 'React',
                logo: reactLogo
            },
            {
                displayName: 'Angular',
                logo: angularLogo
            },
            {
                displayName: 'Sass',
                logo: sassLogo
            },
            {
                displayName: 'Jest',
                logo: jestLogo
            },
            {
                displayName: 'Jasmine',
                logo: jasmineLogo
            }
        ]
    },
    {
        name: 'Back End',
        list: [
            {
                displayName: 'Java',
                logo: javaLogo
            },
            {
                displayName: 'JAX-RS',
                logo: restLogo
            },
            {
                displayName: 'Node',
                logo: nodeLogo
            },
            {
                displayName: 'Express',
                logo: expressLogo
            },
        ]
    },
    {
        name: 'Mobile',
        list: [
            {
                displayName: 'Android',
                logo: androidLogo
            },
            {
                displayName: 'Java',
                logo: javaLogo
            },
            {
                displayName: 'Kotlin',
                logo: kotlinLogo
            }
        ]
    },
    {
        name: 'Infrastructure',
        list: [
            {
                displayName: 'AWS',
                logo: awsLogo
            },
            {
                displayName: 'Jenkins',
                logo: jenkinsLogo
            },
            {
                displayName: 'Docker',
                logo: dockerLogo
            },
            {
                displayName: 'Datadog',
                logo: datadogLogo
            }
        ]
    }
];

const TechStack = (props) => {
    const contentItems = categories.map(item => {
        const individualTech = item.list.map(tech => {
            return (
                <div className={classes.techContainer}>
                    <div className={classes.logo}>
                        <img height="40px" src={tech.logo} />
                    </div>
                    <div className={classes.techName}>
                        {tech.displayName}
                    </div>
                </div>
            );
        })
        return (
            <div className={classes.category}>
                <div className={classes.title}>{item.name}</div>
                <div className={classes.description}>{individualTech}</div>
            </div>
        )
    })
    return (
        <div id='techStack' className={classes.main}>
            <div className={classes.techCardsContainer}>
                <div className={classes.header} >
                    Tech Stack
                </div>
                <div className={classes.content}>
                    {contentItems}
                </div>
            </div>
        </div>
    )
}

export default TechStack;
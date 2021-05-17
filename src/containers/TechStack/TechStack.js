import React from 'react';

import classes from './TechStack.module.css';
import reactLogo from './tech_stack/react.svg';
import angularLogo from './tech_stack/angular.svg';
import sassLogo from './tech_stack/sass.png';
import jestLogo from './tech_stack/jest.png';
import jasmineLogo from './tech_stack/jasmine.png';


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
    // {
    //     name: 'Back End',
    //     list: [
    //         'Java',
    //         'JAX-RS',
    //         'Node',
    //         'Express',
    //         'MongoDB',
    //     ]
    // },
    // {
    //     name: 'Mobile',
    //     list: [
    //         'Android',
    //         'Java',
    //         'Kotlin'
    //     ]
    // },
    // {
    //     name: 'Infrastructure',
    //     list: [
    //         'AWS',
    //         'Jenkins',
    //         'Docker',
    //         'Cloudformation',
    //         'Datadog'
    //     ]
    // }
];

const TechStack = (props) => {
    const contentItems = categories.map(item => {
        const individualTech = item.list.map(tech => {
            return (
                <div className={classes.techContainer}>
                    <div className={classes.logo}>
                        <img width="35px" src={tech.logo} />
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
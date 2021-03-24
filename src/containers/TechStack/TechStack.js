import React from 'react';

import classes from './TechStack.module.css';
import reactLogo from './react.svg';


const categories = [
    {
        name: 'Front End',
        list: [
            {
                displayName: 'React',
                logo: ''
            }
            // 'Angular',
            // 'Sass',
            // 'Webpack',
            // 'Jest',
            // 'Jasmine',
            // 'Electron',
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
                        <img src={reactLogo} />
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
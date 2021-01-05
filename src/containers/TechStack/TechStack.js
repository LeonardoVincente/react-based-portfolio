import React from 'react';

import classes from './TechStack.module.css';

const categories = [
    {
        name: 'Front End',
        list: [
            'React',
            'Angular',
            'Sass',
            'Webpack',
            'Jest',
            'Jasmine',
            'Electron',
        ]
    },
    {
        name: 'Back End',
        list: [
            'Java',
            'JAX-RS',
            'Node',
            'Express',
            'MySql',
            'Jasmine',
        ]
    },
    {
        name: 'Mobile',
        list: [
            'Android',
            'Java',
            'Kotlin'
        ]
    },
    {
        name: 'Infrastructure',
        list: [
            'AWS',
            'Jenkins',
            'Docker',
        ]
    }
];

const TechStack = (props) => {
    const contentItems = categories.map(item => {
        const individualTech = item.list.map(tech => {
            return (
                <li>
                    {tech}
                </li>
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
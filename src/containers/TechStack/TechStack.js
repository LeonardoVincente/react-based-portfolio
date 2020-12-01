import React from 'react';

import classes from './TechStack.module.css';

const TechStack = (props) => {
    return (
        <div  id='techStack' className={classes.main}>
            <div className={classes.techCardsContainer}> Tech Stack</div>
        </div>
    )
}

export default TechStack;
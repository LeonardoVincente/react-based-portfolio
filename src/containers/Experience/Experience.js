import React from 'react';

import classes from './Experience.module.css';
import ExperienceCard from '../../components/UI/ExperienceCard/ExperienceCard';

const Experience = (props) => {
    return (
        <div id="experience" className={classes.mainContainer}>
            <div className={classes.experienceCardContainer}>
                <ExperienceCard></ExperienceCard>
            </div>
        </div>
    );
}

export default Experience;
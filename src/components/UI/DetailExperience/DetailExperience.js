import React from 'react';

import classes from './DetailExperience.module.css';

const DetailExperience = (props) => {
    return (
        <React.Fragment>
            <div className={classes.experienceDetail}>
                <div className={classes.detailCard}>
                    <div className={classes.title}>
                        {props.experienceInfo.company}
                    </div>
                    <div className={classes.detailSection}>
                        {props.experienceInfo.jobTitle}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DetailExperience;
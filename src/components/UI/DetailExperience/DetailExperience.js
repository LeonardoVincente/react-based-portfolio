import React from 'react';

import classes from './DetailExperience.module.css';



const DetailExperience = ({ experienceInfo, onClose }) => {
    
    return (
        <React.Fragment>
            <div className={classes.experienceDetail} onClick={onClose}>
                <div className={classes.detailCard}>
                    <div className={classes.header}>
                        <div className={classes.companyName}>
                            {experienceInfo.company}
                        </div>
                        <div className={classes.title}>
                            {experienceInfo.jobTitle}
                        </div>
                    </div>
                    <div className={classes.contentContainer}>
                        <div className={classes.techStack}>

                        </div>
                        <div className={classes.description}>
                            {experienceInfo.detailed.longDescription}
                        </div>
                        <div className={classes.imagesContainer}>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DetailExperience;
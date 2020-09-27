import React from 'react';

import classes from './DetailExperience.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const DetailExperience = (props) => {
    return (
        <React.Fragment>
            {/* <Backdrop show={true} clicked={props.closed} /> */}
            <div className={classes.experienceDetail}>
                {props.experienceInfo.company}
            </div>
        </React.Fragment>
    );
};

export default DetailExperience;
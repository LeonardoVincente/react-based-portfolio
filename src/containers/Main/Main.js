import React from 'react';

import classes from './Main.module.css';

const main = (props) => {
    return <div className={classes.main}>
        <div className={classes.experienceDetail}>
                Hello
        </div>
        <div className={classes.introduction}>

            <div className={classes.mainImageBG}>
                <div className={classes.bgText}>
                    <div className={classes.textPresentation}>
                        <p>I'm Leonardo Vincente</p>
                        <p>And I'm a Software Engineer</p>
                    </div>
                </div>
            </div>
            <div className={classes.introText}>
                <p>Worked for the past 6+ years building web and Android applications</p>
            </div>
        </div>

    </div>
}

export default main; 
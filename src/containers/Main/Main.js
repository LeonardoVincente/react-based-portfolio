import React from 'react';

import classes from './Main.module.css';

const main = (props) => {
    return <div className={classes.main}>
        <div className={classes.introduction}>

            <div className={classes.mainImageBG}></div>
            <div className={classes.bgText}>
                <h1>I'm Leonardo Vincente</h1>
                <p>And I'm a Software Engineer</p>
            </div>
            <div className={classes.introText}>
                <p>Worked for the past 6+ years building web browser and Android mobile phones</p>
            </div>
        </div>

    </div>
}

export default main; 
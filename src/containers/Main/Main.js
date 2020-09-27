import React from 'react';
import {
    atom,
    useRecoilValue,
} from 'recoil';
import DetailExperience from '../../components/UI/DetailExperience/DetailExperience';

import classes from './Main.module.css';

const experienceState = atom({
    key: 'experienceState',
    default: '',
});

const Main = (props) => {
    const currentExperience = useRecoilValue(experienceState);
    let experienceDetail = null;
    if (currentExperience != null) {
        experienceDetail = (
            <DetailExperience  experienceInfo={currentExperience} />
        );
    }

    return <div className={classes.main}>
        {experienceDetail}
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

export default Main; 
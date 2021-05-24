import React from 'react';
import {
    useRecoilState,
} from 'recoil';
import DetailExperience from '../../components/UI/DetailExperience/DetailExperience';
import { experienceAtom } from '../Experience/Experience';

import classes from './Main.module.css';


const Main = () => {
    const [currentExperience, setCurrentExperience] = useRecoilState(experienceAtom);
    let experienceDetail = null;
    if (currentExperience != null) {
        experienceDetail = <DetailExperience experienceInfo={currentExperience} onClose={() => setCurrentExperience(null)} />
    }

    return <div id="home" className={classes.main}>
        {experienceDetail}
        <div className={classes.introduction}>
            <div className={classes.mainImageBG}>
                <div className={classes.bgText}>
                    <div className={classes.textPresentation}>
                        <p className={classes.nameText}>Leonardo Vincente</p>
                        <p className={classes.animTypewriter}>Software Engineer</p>
                    </div>
                </div>
            </div>
            <div className={classes.introText}>
                <p>Buildig websites and mobile applications for the past 6+ years</p>
            </div>
        </div>
    </div>
}

export default Main; 
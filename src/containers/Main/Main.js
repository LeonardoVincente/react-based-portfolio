import React from 'react';
import {
    useRecoilState,
} from 'recoil';
import DetailExperience from '../../components/UI/DetailExperience/DetailExperience';
import { experienceAtom } from '../Experience/Experience';

import classes from './Main.module.css';

const Main = (props) => {
    const [currentExperience, setCurrentExperience] = useRecoilState(experienceAtom);
    let experienceDetail = null;
    if (currentExperience != null) {
        experienceDetail = <DetailExperience experienceInfo={currentExperience} onClose={()=>setCurrentExperience(null)}/>
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
import React from 'react';
import {
    useRecoilState,
} from 'recoil';
import DetailExperience from '../../components/UI/DetailExperience/DetailExperience';
import { experienceAtom } from '../Experience/Experience';
import Lottie from "lottie-react";
import animationProgramming from "./../../assets/animations/programming-computer.json";

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
                        <p className={classes.nameText}>Leonardo H. Vincente</p>
                        <p className={classes.animTypewriter}>Software Engineer</p>
                    </div>
                </div>
            </div>
            <div className={classes.introText}>
                <p className={classes.text}>
                    Buildig websites and mobile applications for the past 7+ years.
                    I have experience building applications from Front-End, Back End, Infrastructure and development environment. Always looking to better deliver to the end user. 
                </p>
            </div>
            <div className={classes.animationRow}>
                <div className={classes.animationCont}>
                    <Lottie animationData={animationProgramming} loop={true} />
                </div>
            </div>
        </div>
    </div>
}

export default Main; 
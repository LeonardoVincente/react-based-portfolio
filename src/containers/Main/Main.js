import React from 'react';
import {
    useRecoilState,
} from 'recoil';
import DetailExperience from '../../components/UI/DetailExperience/DetailExperience';
import { experienceAtom } from '../Experience/Experience';

import classes from './Main.module.css';


const development = {
    company: 'Facebook Inc.',
    jobTitle: 'Software Engineer',
    startDate: 'August 2020',
    endDate: 'Present',
    jobDescription: 'Currently in bootcamp.',
    logoBGColor: 'gray',
    detailed:{
        longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        projects: [
            {
                title: 'Some title',
                description: 'short description',
                techStack: [
                    'javascript'
                ],
                images: ['some image whatsap 1', 'some image whatsap 2', 'some image whatsap 3']
            }
        ]
    }
};

const Main = (props) => {
    const [currentExperience, setCurrentExperience] = useRecoilState(experienceAtom);
    let experienceDetail = null;
    // if (currentExperience != null) {
    //     experienceDetail = <DetailExperience experienceInfo={currentExperience} onClose={()=>setCurrentExperience(null)}/>
    // }

    experienceDetail = <DetailExperience experienceInfo={development} onClose={() => setCurrentExperience(null)} />
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
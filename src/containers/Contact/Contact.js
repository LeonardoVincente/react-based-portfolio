import React from 'react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

import classes from './Contact.module.css';

const Contact = (props) => {
    return (
        <div id='contact'>
            <div className={classes.main}>
                <div>
                    <a href="https://www.linkedin.com/in/ingleonardohernandez/" target="_blank">
                        <LinkedInIcon /></a>
                </div>
                <div>
                    <a href="mailto: ic.lehevi@gmail.com"><EmailIcon /></a>
                </div>
                <div>
                    <a href="https://github.com/LeonardoVincente" target="_blank">
                        <GitHubIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
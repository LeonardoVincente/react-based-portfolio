import React from 'react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

import classes from './Contact.module.css';

const Contact = (props) => {
    return (
        <div id='contact' className={classes.contact}>
            <div className={classes.main}>

            </div>
            <div className={classes.contactInfo} >
                <div className={classes.contactTitle}>
                    Contact Me
                </div>
                <div className={classes.contactButtons}>
                    <div>
                        <a href="https://www.linkedin.com/in/ingleonardohernandez/" target="_blank">
                            <LinkedInIcon color="inherit" fontSize="large" /></a>
                    </div>
                    <div>
                        <a href="mailto: ic.lehevi@gmail.com"><EmailIcon fontSize="large" /></a>
                    </div>
                    <div>
                        <a href="https://github.com/LeonardoVincente" target="_blank">
                            <GitHubIcon fontSize="large" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';

import classes from './DetailExperience.module.css';

const DetailExperience = ({ experienceInfo }) => {
    return (
        <React.Fragment>
            <div className={classes.experienceDetail}>
                <div className={classes.detailCard}>
                    <div className={classes.header}>
                        <div className={classes.companyName}>
                            {experienceInfo.company}
                        </div>
                        <div className={classes.title}>
                            {experienceInfo.jobTitle}
                        </div>
                    </div>
                    <div className={classes.contentContainer}>
                        <div className={classes.techStack}>

                        </div>
                        <div className={classes.description}>
                            {experienceInfo.detailed.longDescription}
                        </div>
                        <div className={classes.imagesContainer}>

                        </div>
                    </div>
                    {/* <div className={classes.detailSection}>
                        {props.experienceInfo.jobTitle}
                    </div> */}
                    {/* <Carousel>
                        <Carousel.Item>
                
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
   

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel> */}
                </div>
            </div>
        </React.Fragment>
    );
};

export default DetailExperience;
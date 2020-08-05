import React from 'react';
import classes from './Layout.css';


const layout = props => {

    return (
        <React.Fragment>
            <main className={classes.Content}>
                {props.children}
            </main> 
        </React.Fragment>
    );

}


export default layout;
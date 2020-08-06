import React from 'react';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = props => {

    return (
        <React.Fragment>
            <Toolbar></Toolbar>
            {/* <SideDrawer
                isAuth={props.isAuthenticated}
                open={sideDrawerIsVisible}
                closed={sideDraweClosedHandler}
            /> */}
            <main className={classes.Content}>
                {props.children}
            </main> 
        </React.Fragment>
    );

}


export default layout;
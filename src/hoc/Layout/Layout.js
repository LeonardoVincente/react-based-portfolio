import React from 'react';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {

    return (
        <React.Fragment>
            <Toolbar></Toolbar>
            <SideDrawer
                open={true}
                // closed={sideDraweClosedHandler}
            />
            <main className={classes.Content}>
                {props.children}
            </main> 
        </React.Fragment>
    );

}


export default layout;
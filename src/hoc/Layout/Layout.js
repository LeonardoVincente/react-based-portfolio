import React, { useState } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';



const Layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDraweClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        console.log("Side drawer clicked")
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    }
    return (
        <React.Fragment>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler}></Toolbar>
            <SideDrawer
                open={sideDrawerIsVisible}
                closed={sideDraweClosedHandler}
            />
            <main id="mainContainer" className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    );

}


export default Layout;
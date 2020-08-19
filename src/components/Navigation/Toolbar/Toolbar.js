import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    // const drawerToggleClicked = event =>{
    //     console.log("Event clicked");
    // }
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className={classes.leo}>Leonardo Vincente</div>
            {/* <div className={classes.Logo}>
                <Logo height="80%" />
            </div> */}

            <nav className={classes.DesktopOnly}>
                <NavigationItems isAuthenticated={props.isAuth} />
            </nav>
        </header>
    );
}

export default toolbar;
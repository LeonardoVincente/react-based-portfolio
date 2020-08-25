import React, { useState, useEffect } from 'react';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    var [currentSectionSelected, setCurrentSectionSelected] = useState(0);

    let links = [
        {
            link: '#home',
            text: 'Home'
        },
        {
            link: '#experience',
            text: 'Experience'
        }
    ];

    const initializeScroll = (currentSectionSelected, setCurrentSectionSelected, links) => {
        var returnedFunction = debounce(() => {
            let scroll_position = window.scrollY;
            window.requestAnimationFrame(() => {
                updateToolbar(scroll_position, setCurrentSectionSelected, currentSectionSelected, links);
            });
        }, 250);

        window.addEventListener('scroll', returnedFunction);
    }

    useEffect(() => {
        initializeScroll(currentSectionSelected, setCurrentSectionSelected, links);
    }, []);

    const navigationItems = links.map((linkObj) => {
        return <NavigationItem
            link={linkObj.link}
            isSelected={true}
        >{linkObj.text}</NavigationItem>
    })

    return (
        <ul className={classes.NavigationItems}>
            {navigationItems}
        </ul>
    );
};

const updateToolbar = (position, setCurrentSectionSelected, cur, listElements) => {
    console.log("DOING SOMETHING " + position);

    for (let i = 0; i < listElements.length; i++) {
        const element = document.querySelector(listElements[i].link);
        var rect = element.getBoundingClientRect();
        element.style = "color: green";
        console.log("Element ", element);
        if (position >= rect.top && position <= rect.bottom) {
            element.style = "color: red";
            
        }
    }

    setCurrentSectionSelected(cur + 1);

}

const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export default NavigationItems;
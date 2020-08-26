import React, { useState, useEffect } from 'react';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
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

    var [currentSectionSelected, setCurrentSectionSelected] = useState(links[0]);

    const initializeScroll = (currentSectionSelected, setCurrentSectionSelected, links) => {
        var returnedFunction = debounce(() => {
            let scroll_position = window.scrollY;
            window.requestAnimationFrame(() => {
                updateToolbar(scroll_position, setCurrentSectionSelected, currentSectionSelected, links);
            });
        }, 400);
        window.addEventListener('scroll', returnedFunction);
    }

    useEffect(() => {
        initializeScroll(currentSectionSelected, setCurrentSectionSelected, links);
    }, []);

    const navigationItems = links.map((linkObj) => {
        return <NavigationItem
            key={linkObj.link}
            link={linkObj.link}
            isSelected={currentSectionSelected.link === linkObj.link}
        >{linkObj.text}</NavigationItem>
    })

    return (
        <ul className={classes.NavigationItems}>
            {navigationItems}
        </ul>
    );
};


const getLinkObjById = (id, links) => {
    if (!links) {
        return;
    }

    for (let i = 0; i < links.length; i++) {
        if (links[i].link === id) {
            return links[i];
        }
    }
    return;
}

const updateToolbar = (position, setCurrentSectionSelected, cur, listElements) => {
    for (let i = 0; i < listElements.length; i++) {
        const element = document.querySelector(listElements[i].link);
        var rect = element.getBoundingClientRect();
        if (position >= rect.top && position <= rect.bottom) {
            let selectedObj = getLinkObjById(listElements[i].link, listElements);
            setCurrentSectionSelected(selectedObj);
        }
    }
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
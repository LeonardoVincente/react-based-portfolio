import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
import { experienceAtom } from '../../../containers/Experience/Experience';

const links = [
    {
        link: '#home',
        text: 'Home'
    },
    {
        link: '#experience',
        text: 'Experience'
    },
    {
        link: '#techStack',
        text: 'Tech Stack'
    },
    {
        link: '#contact',
        text: 'Contact Me'
    }
];


const NavigationItems = () => {

    var [currentSectionSelected, setCurrentSectionSelected] = useState(links[0]);
    const [_0, setCurrentExperience] = useRecoilState(experienceAtom);

    const handleClick = (link) => {
        setCurrentExperience(null);
        links.forEach(currentLink => {
            if (currentLink.link === link) {
                setCurrentSectionSelected(currentLink);
            }
        })
    }

    const initializeScroll = (setCurrentSectionSelected, links) => {
        var returnedFunction = debounce(() => {
            const mainContainer = document.getElementById('mainContainer');
            let scroll_position = mainContainer.scrollTop;
            window.requestAnimationFrame(() => {
                setCurrentExperience(null);
                updateToolbar(scroll_position, setCurrentSectionSelected, links);
            });
        }, 50);
        const mainContainer = document.getElementById('mainContainer');
        if (mainContainer) {
            mainContainer.addEventListener('scroll', returnedFunction);
        }
    }

    useEffect(() => {
        initializeScroll(setCurrentSectionSelected, links);
    }, []);

    const navigationItems = links.map((linkObj) => {
        return <NavigationItem
            key={linkObj.link}
            link={linkObj.link}
            isSelected={currentSectionSelected.link === linkObj.link}
            onClick={handleClick}
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

const updateToolbar = (position, setCurrentSectionSelected, listElements) => {
    for (let i = 0; i < listElements.length; i++) {
        const element = document.querySelector(listElements[i].link);
        var rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            let selectedObj = getLinkObjById(listElements[i].link, listElements);
            setCurrentSectionSelected(selectedObj);
            break;
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
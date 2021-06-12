import React from 'react';
import {EVENT} from '../events/ListEvents';
import _ from 'lodash';

export default class CommonActions {
    static loadingProgress = () => {
        return (
            <div id='now_deli_loading' className='yellow_loading'>
                <div className='loading_logo'>
                    <img src="/beef/images/now-deli-logo.png" alt="Now Deli"/>
                </div>
                <div className='progress_bar'/>
            </div>
            
        )
    }

    static getActionStyle() {
        console.log("lô lô")
        const cssLink = 'css/beef/styles.min.css';
        const cssFile = (cssLink.startsWith('http') || cssLink.startsWith('https')) 
                            ? cssLink : `${process.env.PUBLIC_URL}/${cssLink}`;
        const link = document.createElement('link');
        link.type = 'text/css';
        link.id = 'now-deli-stylesheet';
        link.rel = 'preload stylesheet';
        link.href = cssFile;
        link.as = 'style';
        link.onload = function () {
            link.onload = null;
            link.rel = 'stylesheet';
            window.fireEvent(EVENT.LOADED_CSS);
        };
        document.head.appendChild(link);
    }

    static lazyWithPreload(pathComponent) {
        const component = React.lazy(pathComponent);
        component.preload = pathComponent;
        console.log(component);
        return component;
    }
    
    static replaceProductName(productName) {
        return _.kebabCase(productName);
    }
}


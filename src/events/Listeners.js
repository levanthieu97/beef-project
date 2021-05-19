import {EVENT} from './ListEvents';

(function () {
    const checkEvent = () => {
        return ( typeof EVENT === 'undefined' || EVENT === null) ? false : true;
    }

    let browser = function() {
        // Return cached result if avalible, else get result then cache it.
        if (browser.prototype._cachedResult){
            return browser.prototype._cachedResult
        }

        // Opera 8.0+
        let isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

        // Firefox 1.0+
        let isFirefox = typeof InstallTrigger !== 'undefined';

        // Safari 3.0+ "[object HTMLElementConstructor]"
        let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]" })(!window['safari'] || window.safari.pushNotification);

        // Internet Explorer 6-11
        let isIE = /*@cc_on!@*/false || !!document.documentMode;

        // Edge 20+
        let isEdge = !isIE && !!window.StyleMedia;

        // Chrome 1+
        let isChrome = !!window.chrome && !!window.chrome.webstore;

        // Blink engine detection
        let isBlink = (isChrome || isOpera) && !!window.CSS;

        return browser.prototype._cachedResult =
            isOpera ? 'Opera' :
                isFirefox ? 'Firefox' :
                    isSafari ? 'Safari' :
                        isChrome ? 'Chrome' :
                            isIE ? 'IE' :
                                isEdge ? 'Edge' :
                                    isBlink ? 'Blink' :
                                        "Don't know"
    }

    const IEBrowser = function () {
        let br = browser()
        let isEvent = typeof (Event) === 'function'
        return (br === 'IE' || br === 'Edge' || !isEvent) ? true : false
    }

    if(checkEvent()) {
        for(let key in EVENT) {
            let eventName = EVENT[key];
            if(IEBrowser()) {
                window[eventName] = document.createEvent('Event');
                window[eventName].initEvent(eventName, true, true);
            } else {
                window[eventName] = new Event(eventName, {"bubbles": true, "cancelable": true});
            }
        }
    }

    window.fireEvent = function(eventName, trackName) {
        if(trackName !== null) {
            console.log(eventName + '-' + trackName);
        }
        window.dispatchEvent(window[eventName]);
    }

    window.listenEvent = function(eventName, handle) {
        if('addEventListener' in window) {
            window.addEventListener(eventName, handle);
        }
        if('attachEvent' in window) {
            window.attachEvent('on' + eventName, handle);
        }
        return handle;
    }

    window.stopListenEvent = function(eventName, handle) {
        if(typeof Event !== 'function' || window.removeEventListener) {
            window.removeEventListener(eventName, handle);
        } else {
           window.detachEvent('on' + eventName, handle); 
        }
    }

    window.browser = function() {
        return browser();
    }

})()
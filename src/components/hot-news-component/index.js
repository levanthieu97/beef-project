import React from "react";
import MarqueeComponent from "./marquee-component";
import {message} from "./Message";

const HotNewsComponent = () => {
    
    return (
        <div className="hot-new__container">
            <div className="body-wrapper">
                <MarqueeComponent messages={message} />
            </div>
        </div>
    )
}

export default React.memo(HotNewsComponent);
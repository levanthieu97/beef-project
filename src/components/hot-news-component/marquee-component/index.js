import React, { useEffect, useRef } from "react";
import _ from "lodash";
import {v1 as uuid} from "uuid"

const MarqueeComponent = (props) => {
    const marquee = useRef();
    const defaultTime = 7;
    useEffect(() => {
        const currentMarquee = marquee.current;
        if (currentMarquee) {
          const marqueeLength = _.get(currentMarquee, "clientWidth", 0);
          const marqueeTravelTime =
            marqueeLength !== 0
              ? Math.ceil(marqueeLength / 60)
              : getDefaultMarqueeTravelTime();
          currentMarquee.style.animation = `scrollLeft ${marqueeTravelTime}s linear infinite`;
        }
      });

    function getDefaultMarqueeTravelTime() {
    let marqueeTravelTime = defaultTime;

    const numberOfChars = _.get(marquee, "current.innerText.length");
    if (numberOfChars > 0) {
        marqueeTravelTime = Math.ceil((numberOfChars * defaultTime) / 60);
    }

    return Math.max(defaultTime, marqueeTravelTime);
    }

    const messages = _.isEmpty(props.messages)
    ? ["Welcome"]
    : _.map(props.messages, (ann, index) => {
      console.log(ann);
        return (
            <span
            key={index}
            dangerouslySetInnerHTML={{
                __html: ann
                .replace(/<.+?>/g, "")
                .replace(/&nbsp;/gi, "")
                .toString()
                .trim(),
            }}
            ></span>
        );
    });

    return (
        <div className="marquee-container">
          <span className="marquee-fade"> </span>{" "}
          <div key={uuid()} className="marquee" ref={marquee}>
            {" "}
            {messages}{""}
          </div>{" "}
        </div>
    );

}

export default React.memo(MarqueeComponent);
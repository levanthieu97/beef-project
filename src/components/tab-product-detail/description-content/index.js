import React from "react";

const DescriptionContent = (props) => {
    return (
        <div className="content__description row">
            <div className="col-md-6 col-sm-12 image-content">
                <img alt="Image Description" src="/beef/images/Loin.jpg"/>
            </div>
            <div className="col-md-6 col-sm-12">
                <h4 className="description-title">{props.title}</h4>
                <p className="content">
                    Snake River Farms Gold Grade Top Sirloins have a greater amount of marbling than
                    other Wagyu sirloin steaks, which makes these unique cuts intensely flavorful and rich with beefy taste. 
                    These Wagyu steaks have the firm texture associated with the sirloin cut, but feature the same delicious essence of Japanese Wagyu beef. 
                    Available in 3 cut sizes, each sirloin is hand-selected and hand-trimmed to ensure you receive a memorable and delicious eating experience.
                </p>
            </div>  
        </div>
    )
}

export default React.memo(DescriptionContent);
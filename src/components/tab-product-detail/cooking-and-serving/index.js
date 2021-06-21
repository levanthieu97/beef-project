import React from "react";

const CookAndServiceComponent = (props) => {
    return (
        <div className="cook__description row">
            <div className="col-md-5 hidden-sm-down image-cooking">
                <img alt="Image Description" src="/beef/images/cook.jpg"/>
            </div>
            <div className="col-md-7 col-sm-12">
                <h4 className="description-title">{props.title}</h4>
                <p className="content">Cooking Methods: Pan-Roast, Roast, Sous Vide, Grill</p>
                <p className="content">
                    Cooking Tips: Rack of lamb pairs well with a variety of seasonings, 
                    from fresh herbs like rosemary and thyme to Dijon mustard, spicy harissa, 
                    or simply olive oil and coarse salt and pepper. Gently score the fat cap before cooking. 
                    The rack can also be sliced into individual or double chops before cooking, if desired. 
                    Rack of lamb and lamb chops are best enjoyed medium-rare, or 145 degrees F on an instant-read thermometer. 
                    Always allow the finished lamb to rest before slicing or serving.
                </p>
            </div>
        </div>
    )
}

export default React.memo(CookAndServiceComponent);
import React from "react";

const ShippingComponent = (props) => {
    return (
        <div className="shipping__description row">
            <div className="col-md-12 col-sm-12">
                <h4 className="description-title">{props.title}</h4>
                <p>
                    - Orders can be delivered to qualifying addresses in all 50 states and the District of American.
                </p>
                <p>
                    - We ship via FedEx Overnight to arrive on the specific date you select when placing your order.
                </p>
            </div> 
            <div className="col-md-12 col-sm-12 image-shipping">
                <img alt="Image Description" src="/beef/images/slide-3.jpg"/>
            </div>
             
        </div>
    )
}

export default React.memo(ShippingComponent);
import React from "react";
import CalendarComponent from "./calendar-component";

const ShippingComponent = (props) => {


    return (
        <div className="shipping-content-container">
            <div className="confirm-info-order">
                
            </div>
            <div>
                <CalendarComponent/>
            </div>
        </div>
    )
}

export default React.memo(ShippingComponent);
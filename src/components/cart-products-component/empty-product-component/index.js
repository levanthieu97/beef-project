import React from "react";
import {useHistory} from "react-router-dom";
const EmptyCartComponent = (props) => {

    const history = useHistory();

    const redirectHomePage = () => {
        history.push("/");
    }
    return (
        <div className="empty-cart-container">
            <div className="empty-products-image">
                <img className="image-empty" alt="Empty Cart" title="Empty Cart" src="/beef/images/empty-cart.jpg"></img>
            </div>
            <div className="empty-cart-info">
                <h4>There are no items in the shopping cart</h4>
                <div className="btn-wrapper">
                    <button type="button" className="btn btn-join-us">Sign in / Join us</button>
                </div>
                <div className="btn-wrapper">
                    <button type="button" className="btn btn-shop-now" onClick={redirectHomePage}>Shopping now</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(EmptyCartComponent);
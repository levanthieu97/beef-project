import React, {useState} from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import ProductItemComponent from "../product-item-component";

const SummaryCartComponent = (props) => {
    const history = useHistory();
    const [showCart, setShowCart] = useState(false);
    const {cartItems} = useSelector(state => state.cartSlice);
    const { isSmallLayout } = useSelector(state =>state.globalSlice);
    const redirectCart = () => {
        history.push('cart')
    }
    const showCartMB = (value) => {
        setShowCart(!value);
    }

    return (
        <section className="summary-cart-container">
            <div className="container-wrapper">
                <header className="summary-section-header">
                    <h2 className="title-header">In your bag</h2>
                    <div className="edit-cart" onClick={redirectCart}>Edit</div>
                    <div className="show-cart" onClick={() =>showCartMB(showCart)}>
                        <i className={`${showCart ? 'icon-up-open' : 'icon-down-open'}`}></i>
                    </div>
                </header>
                { (!isSmallLayout || showCart) && <div className="summary-section-content">
                    <ol className="products-shopping-cart">
                        {cartItems.map(item => (
                            <li className="product-item" key={uuid()}>
                                <ProductItemComponent {...item}/>
                            </li>
                        ))}
                    </ol>
                </div>}
            </div>
        </section>
    )
}

export default React.memo(SummaryCartComponent);
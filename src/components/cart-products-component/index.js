import React from "react";
import { useSelector } from 'react-redux';
import ItemComponent from "./item-component";
import PromotionGiftComponent from "./promotion-gift-component";
import RelatedProductComponent from "../related-products-component";
import {v4 as uuid} from 'uuid';

const CartProductsComponent = (props) => {
    const {cartItems} = useSelector(state => state.cartSlice);

    return (
        <div className="cart-container">
            <div className="cart-content row">
                <div className="cart-products col-md-8 col-sm-12">
                    <form id="form-validate">
                        <div className="cart-table-wrapper cart-list">
                            <table id="shopping-cart-table" className="table-data">
                                <thead>
                                    <tr>
                                        <th className="column item"><span>Item</span></th>
                                        <th className="column price"><span>Price</span></th>
                                        <th className="column qty"><span>Quantity</span></th>
                                        <th className="column subtotal"><span>Sub-total</span></th>
                                        <th className="column action"><span>Actions</span></th>
                                    </tr>
                                </thead>
                                <tbody className="cart-body">
                                    {cartItems.map( item => (
                                        <ItemComponent
                                            key={uuid()}
                                            {...item}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
                <div className="cart-summary col-md-4 col-sm-12">
                    <PromotionGiftComponent />
                </div>
            </div>
            <div className="product-enjoy-container">
                <div className="list-product-enjoy">
                    <RelatedProductComponent />
                </div>
            </div>
        </div>
    )
}

export default React.memo(CartProductsComponent);
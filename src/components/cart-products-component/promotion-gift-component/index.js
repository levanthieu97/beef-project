import React from "react";
import {useHistory} from "react-router-dom";
import { useForm } from "react-hook-form";

const PromotionGiftComponent = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const history = useHistory();
    const applyPromo = (data) => {

    }
    
    const stepCheckout = () => {
        history.push("checkout")
    }

    return (
        <div className="cart-payment-container">
            <div id="promotion-card">
                <div className="cart-promotion">
                    <div className="promotion-title">
                        Add promo code
                    </div>
                    <form onSubmit={handleSubmit(applyPromo)}>
                        <div className="form-content">
                            <div className="fieldset">
                                <input
                                    className="form__input"
                                    type="text"
                                    placeholder="Enter discount code"
                                    {...register("promo", {require: true})}
                                />
                            </div>
                            <div className="apply-promo">
                                <button type="submit" className="btn-promo">Apply</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="cart-totals">
                <div className="cart-totals-wrapper">
                    <table className="table-totals">
                        <caption className="table-caption" data-bind="Total"> Total</caption>
                        <tbody>
                            <tr className="totals sub">
                                <th className="mark">
                                    <span className="label">Subtotal</span>
                                </th>
                                <td className="amount">
                                    <span className="price" data-th="Subtotal">$49.00</span>
                                </td>
                            </tr>
                            <tr className="totals shipping">
                                <th className="mark">
                                    <span className="label">Estimated Shipping</span>
                                </th>
                                <td className="amount">
                                    <span className="price">Calculated in checkout</span>
                                </td>
                            </tr>
                            <tr className="totals-tax">
                                <th className="mark">
                                    <span className="label">Tax</span>
                                </th>
                                <td className="amount">
                                    <span className="price">Calculated in checkout</span>
                                </td>
                            </tr>
                            <tr className="totals grand">
                                <th className="mark">
                                    <strong>Order Total</strong>
                                </th>
                                <td className="amount">
                                    <strong>$49.00</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="btn-next-checkout">
                <button type="button" className="btn-step-checkout" onClick={stepCheckout}>
                    Proceed to checkout
                </button>
            </div>
        </div>
    )
}

export default React.memo(PromotionGiftComponent);
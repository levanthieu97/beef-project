import React from 'react';

const CheckoutStatusComponent = ({ countProduct, step }) => {
  return (
    <div className="cart__intro">
      <h3 className="cart__title">{step === 'cart' ? 'Shopping Cart' : 'Checkout'} {countProduct > 0 && step === 'cart' ? `(${countProduct})` : null}</h3>
      <div className="checkout-status">
        <ul className="checkout-steps">
          <li className={`${step === 'cart' ? 'active' : 'done'}`}><i className="icon-cart"></i></li>
          <li className={`${step === 'checkout' ? 'active' : 'done'}`}><i className="icon-delivery"></i></li>
        </ul>
      </div>
    </div>
  )
};

export default React.memo(CheckoutStatusComponent);
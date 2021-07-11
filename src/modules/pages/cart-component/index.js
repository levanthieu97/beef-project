import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { setEmptyCart } from "../../../store/actions/GlobalAction"
import {HotNewsComponent, Breadcrumb, CheckoutStatusComponent, EmptyCartComponent, CartProductsComponent, CheckoutComponent} from '../../../components';

const CartComponent = (props) => {
    const dispatch = useDispatch();
    const {cartItems} = useSelector(state => state.cartSlice);
    const {isEmptyCart} = useSelector(state => state.globalSlice);

    useEffect(() => {
        if(cartItems.length === 0 && !isEmptyCart){
            dispatch(setEmptyCart(true));
        }
    }, [JSON.stringify(cartItems)]);
    const params = useParams();
    const breadcrumbList = [
        {
            link: '',
            title: 'Shopping Cart'
        }
    ];

    const renderContent = () => {
        if(!isEmptyCart) {
            return params[0] === 'cart' ? <CartProductsComponent/> : <CheckoutComponent/>
        } else {
            return <EmptyCartComponent/>
        }
    }

    return (
        <React.Fragment>
            <HotNewsComponent />
            <Breadcrumb breadcrumbList={breadcrumbList}/>

            <section className="cart">
                <div className="component-container">     
                    <CheckoutStatusComponent countProduct={cartItems.length} step={params[0]}/>
                    {renderContent()}
                </div>
            </section>
        </React.Fragment>
    )
}

export default React.memo(CartComponent);
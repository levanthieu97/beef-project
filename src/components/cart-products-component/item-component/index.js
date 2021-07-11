import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import CommonActions from '../../../common/CommonActions';
import {selectedProduct} from '../../../store/actions/ProductsAction';
import {setCount, removeProduct} from '../../../store/actions/CartAction';
import {data} from '../../top-sell-component/data';
import { FaTrashAlt } from "react-icons/fa";
import _ from 'lodash';

const ItemComponent = (props) => {
    const dispatch = useDispatch();
    const [countCurrent, setCountCurrent] = useState(props.count);
    const findProduct = CommonActions.getObjectByValue(data, "name", props.name)

    const choseProduct = (product) => {
        dispatch(selectedProduct(product));
    }

    const decrement = () => {
        const countDecrement = countCurrent > 1 ? countCurrent - 1 : 1;
        setCountCurrent(countDecrement);
        dispatch(setCount({
            id: props.id,
            size: props.size,
            count: countDecrement
        }))
    }
    const increment = () => {
        const countIncrement = countCurrent + 1;
        setCountCurrent(countIncrement);
        dispatch(setCount({
            id: props.id,
            size: props.size,
            count: countIncrement
        }))
    }

    const changeQuantity = (e) => {
        const quantity = (e.target.validity.valid) && !_.isEmpty(e.target.value) ? e.target.value : countCurrent;
        setCountCurrent(parseInt(quantity));
        dispatch(setCount({
            id: props.id,
            size: props.size,
            count: countCurrent
        }))
        e.preventDefault();
    }

    const removeFromCart = () => {
        dispatch(removeProduct({
            id: props.id,
            size: props.size
        }))
    }

    return (
        <tr className="item-info">
            <td className="column item">
                <div className="info-product">
                    <div className="product-item-photo">
                        <img className="product-image-photo" src={props.image} alt={props.name}></img>
                    </div>
                    <div className="product-item-info">
                        <div className="product-name">
                            <Link to={`/products/${CommonActions.replaceProductName(props.name)}`} onClick={() => choseProduct(findProduct)}>
                                <h4 className="display-category-name">{props.name}</h4>
                            </Link>
                        </div>
                        <div className="product-item-size">
                            <p><strong>Size:</strong> {props.size}</p>
                        </div>
                    </div>
                </div>
            </td>
            <td className="column mb-custom price" data-th="Price">
                <span className="cart-price">$ {props.price}</span>
            </td>
            <td className="column mb-custom qty" data-th="Quantity">
                <div className="quantity-button">
                    <button  type="button" onClick={() => decrement()} className="quantity-button__btn"> - </button>
                    <input className="quantity-input" maxLength="3" type="text" pattern="[0-9]*" value={countCurrent} onInput={changeQuantity}></input>
                    <button type="button" onClick={() => increment()} className="quantity-button__btn"> + </button>
                </div>
            </td>
            <td className="column mb-custom subtotal" data-th="Sub-total">
                <span className="cart-subtotal">$ {props.price}</span>
            </td>
            <td className="column actions">
                <div className="cart-remove-actions">
                    <button type="button" className="cart-remove" onClick={() => removeFromCart()}>
                        <FaTrashAlt/>
                    </button>
                </div>
            </td>
        </tr>
    )
}
export default React.memo(ItemComponent);
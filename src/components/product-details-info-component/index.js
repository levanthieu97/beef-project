import React, {useReducer} from "react";
import {beefSize} from "../../utils/beef-size";
import CheckboxSize from "../products-filter/checkbox-size";
import {addProduct} from '../../store/actions/CartAction';
import { useDispatch } from "react-redux";

import _ from "lodash";

const ProductDetailsInfo = (props) => {
  const dispatch = useDispatch();
  const comboPackage = [
    {
      number: 4,
      price: '$200.90',
      save: '5%'
    },
    {
      number: 8,
      price: '$180.90',
      save: '15%'
    }
  ]
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      count: 1,
      defaultCheck: beefSize[0].id,
      size: beefSize[0].label,
      unit: 'lb',
      price: beefSize[0].price,
      estWeight: beefSize[0].estWeight,
      discount: 0
    }
  )
  const onSizeSet = (value) => {
    setState({
        size: value.size,
        estWeight: value.estWeight
    });
  }

  const decrement = () => {
    setState({
      count: state.count > 0 ? --state.count : 0
    })
  }
  
  const addToCart = () => {
    dispatch(addProduct({
      id: props.id,
      sku: '123456',
      name: props.name,
      size: state.size,
      price: state.price,
      count: state.count,
      discount: state.discount,
      image: props.primaryImage
    }))
  }

  const changeQuantity = (e) => {
    const quantity = (e.target.validity.valid) && !_.isEmpty(e.target.value) ? e.target.value : state.count;
    setState(
      {count: parseInt(quantity)}
    )
    e.preventDefault();
  }
  return (
    <section className="product-details-info">
      <div className="product-content__intro">
        
        {/* <span className="product-on-sale">Sale</span> */}
        <h2 className="product__name">{props.name}</h2>
        <span className="product__id">SKU: 123456</span>
        <div className="product__prices">
          <h4>${props.currentPrice}</h4>
          {props.discount &&
            <span className="price-discount">{props.price}</span>
          }
          <button type="button" className="btn-heart"><i className="icon-heart"></i></button>
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>
            Size:
          </h5>
          <div className="checkbox-size-wrapper">
            {beefSize.map(type => (
              <CheckboxSize
                key={type.id}
                type='radio'
                name='product-size'
                size={type.id}
                valueName={type.label}
                price={type.price}
                sale={type.sale}
                defaultCheck={state.defaultCheck}
                onChange={onSizeSet}
                estWeight={type.estWeight}
              />
            ))}
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Description:</h5>
          <div className="product-short-description__content">
            <p>
              A Snake River Farms Gold Grade top sirloin is a steak that surprises. 
              Sirloins are considered a humble cut, but this special edition has a high amount of intramuscular fat for flavor that goes beyond expectations.
            </p>
          </div>
          <div className="product-short-description__actions">
            <div className="action-read-more" title="Read More">
              <span>READ MORE</span>
            </div>
          </div>
        </div>
        <div className="price-box price-tier_price">
          <div className="tier-price-swatch-label">
            Stock Up Savings -
            <span> {state.size} </span>
            {state.estWeight && <span className="estimate-weight">Est Weight. {state.estWeight}</span>}
          </div>
          <div className="tier-price-block">
            <ul className="prices-tier items">
              {comboPackage.map((item, index) => (
                <li className="item" key={index}>
                  Buy {item.number} for 
                  <span className="price-container"> {item.price} </span>
                  each end 
                  <strong className="benefit"> save {item.save}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="product-filter-item">
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button  type="button" onClick={() => decrement()} className="quantity-button__btn"> - </button>
              <input className="quantity-input" maxLength="3" type="text" pattern="[0-9]*" value={state.count} onInput={changeQuantity}></input>
              <button type="button" onClick={() => setState({count: state.count + 1})} className="quantity-button__btn"> + </button>
            </div>
            <button onClick={() => addToCart()} type="submit" className="btn-to-cart btn-action" > Add to cart </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductDetailsInfo);

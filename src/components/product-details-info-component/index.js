import React, {useReducer} from "react";
import {beefSize} from "../../utils/beef-size";
import CheckboxSize from "../products-filter/checkbox-size";

const ProductDetailsInfo = (props) => {
  const discount = true;
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      count: 1,
      defaultCheck: beefSize[0].id,
      size: beefSize[0].id,
    }
  )
  const onSizeSet = (value) => {
    setState(
      {size: value}
    );
  }
  
  return (
    <section className="product-details-info">
      <div className="product-content__intro">
        
        {/* <span className="product-on-sale">Sale</span> */}
        <h2 className="product__name">Beef with mint</h2>
        <span className="product__id">SKU: 123456</span>
        <div className="product__prices">
          <h4>$80</h4>
          {discount &&
            <span className="price-discount">$100</span>
          }
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>
            Size: <strong>{state.size}</strong>
          </h5>
          <div className="checkbox-size-wrapper">
            {beefSize.map(type => (
              <CheckboxSize
                key={type.id}
                type='radio'
                name='product-color'
                size={type.id}
                valueName={type.label}
                price={type.price}
                sale={type.sale}
                defaultCheck={state.defaultCheck}
                onChange={onSizeSet}
              />
            ))}
          
            {/* <div className="select-wrapper">
              <select>
                <option>Choose size</option>
                
              </select>
            </div> */}
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button  type="button" onClick={() => setState({count: state.count - 1})} className="quantity-button__btn"> - </button>
              <span>{state.count}</span>
              <button type="button" onClick={() => setState({count: state.count + 1})} className="quantity-button__btn"> + </button>
            </div>

            <button type="submit" className="btn btn--rounded btn--yellow" > Add to cart </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductDetailsInfo);

import React from "react";

const ProductItemComponent = (props) => {
    console.log(props);
    return (
        <div className="info-product product">
            <div className="product-item-photo">
                <img className="product-image-photo" src={props.image} alt={props.name}></img>
            </div>
            <div className="product-item-info">
                <div className="product-item-name">
                        <h4 className="display-category-name">{props.name}</h4>
                </div>
                <div className="product-item-size">
                    <span>Size: {props.size}</span>
                    <span className="quantity-item">QTY: {props.count}</span>
                </div>
                <div className="price-product">
                    ${props.price}
                </div>
            </div>
        </div>
    )
}

export default React.memo(ProductItemComponent)

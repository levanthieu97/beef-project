import React from 'react';
import {Link} from 'react-router-dom';

const ProductItemComponent = (props) => {

    const activeFavoriteItem = () => {
        console.log("lalalalala");
    } 

    return (
        <div className="product-item">
            <div className="product__image">
                <button type="button" className="btn-heart" onClick={() => activeFavoriteItem()}><i className="icon-heart"></i></button>
                <Link to={`/products/${props.id}` }>
                    <img className="image-primary" src={props.primaryImage} alt="product" />
                    <img className="image-hover" src={props.hoverImage} alt="product"/>
                    { props.discount && props.discount > 0 && 
                        <span className="product__discount">{props.discount}%</span>
                    }
                </Link>
            </div>
            
            <div className="product__description">
                <div className="product-info">
                    <Link to={`/products/${props.id}`}>
                        <h3 >{props.name}</h3>
                    </Link>
                    <div className={"product__price " + (props.discount ? 'product__price--discount' : '')} >
                        <h4>${ props.currentPrice }</h4>
                        {props.discount &&  props.discount > 0 &&
                            <span>${ props.price }</span>
                        }
                    </div>
                </div>
                <div className="product-add-cart">
                    <button type="button" className="btn-add-item">
                        <i className="icon-cart"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ProductItemComponent);


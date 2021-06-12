import React, {useEffect, useState, useReducer} from 'react';
import {useSelector} from "react-redux";
import _ from 'lodash';
import {data} from '../../../components/top-sell-component/data';
import {HotNewsComponent, Breadcrumb, GalleryComponent, ProductDetailsInfo} from '../../../components';

const ProductsComponent = (props) => {
    const [showBlock, setShowBlock] = useState(true);
    const {selectedProduct} = useSelector(state => state.productsSlice);
    
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            choseProduct: {},
        }
    )
    const listImageProducts = [
        selectedProduct.primaryImage,
        selectedProduct.hoverImage,
        "/beef/images/products/beef-3.jpg",
        "/beef/images/products/beef-4.jpg",
        "/beef/images/products/beef-5.jpg",
        "/beef/images/products/beef-7.jpg",
    ]

    useEffect(() => {
        if(_.isEmpty(selectedProduct)) {
            const productName = _.lowerCase(window.location.pathname.split('/').pop());
            const productActive = _.find(data, function(product) {
                return _.lowerCase(product.name) === productName;
            })
            setState({choseProduct: productActive});
        }
    }, [selectedProduct])
    
    return (
        <React.Fragment>
            <HotNewsComponent />
            <Breadcrumb />

            <section className="product-single">
                <div className="component-container">
                    <div className="product-single__content">
                        <GalleryComponent images={listImageProducts}/>
                        <ProductDetailsInfo productInfo={state.choseProduct}/>
                    </div>
                
                    <div className="product-single__info">
                    <div className="product-single__info-btns">
                        <button type="button" onClick={() => setShowBlock(true)} className={`btn btn--rounded ${showBlock ? 'btn--active' : ''}`}>Description</button>
                        <button type="button" onClick={() => setShowBlock(false)} className={`btn btn--rounded ${!showBlock ? 'btn--active' : ''}`}>Reviews (2)</button>
                    </div>

          </div>
                </div>
            </section>

        </React.Fragment>
    );
}

export default React.memo(ProductsComponent);

import React, {useState} from 'react';
import {HotNewsComponent, Breadcrumb, GalleryComponent} from '../../../components';

const ProductsComponent = (props) => {
    const [showBlock, setShowBlock] = useState(true);
    const listImageProducts =[
        "/beef/images/products/beef-1.jpg",
        "/beef/images/products/beef-2.jpg",
        "/beef/images/products/beef-3.jpg",
        "/beef/images/products/beef-4.jpg",
        "/beef/images/products/beef-5.jpg",
        "/beef/images/products/beef-6.jpg",
    ]
    return (
        <React.Fragment>
            <HotNewsComponent />
            <Breadcrumb />

            <section className="product-single">
                <div className="component-container">
                    <div className="product-single__content">
                        <GalleryComponent images={listImageProducts}/>
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

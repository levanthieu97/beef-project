import React from 'react';
import {data} from './data';
import ProductCarouselComponent from '../product-carousel-component';

const TopSellComponent = (props) => {

    return (
        <section className="section">
            <div className="component-container">
                <header className="section__intro">
                    <h4>Top Sell Products</h4>
                </header>

                <ProductCarouselComponent products={data} loop={true}/>
            </div>
        </section>
    )
}

export default React.memo(TopSellComponent);
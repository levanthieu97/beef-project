import React from 'react';
import {data} from '../top-sell-component/data';
import ProductCarouselComponent from '../product-carousel-component';

const NewArrivalsComponent = (props) => {

    return (
        <section className="section">
            <div className="component-container">
                <header className="section__intro">
                    <h4>BEEF</h4>
                </header>

                <ProductCarouselComponent products={data} loop={false}/>
            </div>
        </section>
    )
}

export default React.memo(NewArrivalsComponent);
import React from "react";
import {data} from '../top-sell-component/data';
import ProductCarouselComponent from "../product-carousel-component";

const RelatedProductComponent = (props) => {
    return (
        <div className="related-products__wrapper section">
            <div className="related-products__title section__intro">
                <h4>You May Also Enjoy</h4>
            </div>
            <div className="related-products__content">
                <ProductCarouselComponent products={data} showLoadMore={false}/>
            </div>
        </div>
    )
}

export default React.memo(RelatedProductComponent);
import React from 'react';
import Swiper from 'react-id-swiper';
import ProductItemComponent from '../product-item-component';
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

const ProductCarouselComponent = (props) => {

    const params = {
        observer: true,
        observeParents: true,
        spaceBetween: 20,
        loop: props.loop,
        centeredSlides: false,
        watchOverflow: true,
        slidesPerView: 2.2,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 35
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }

    }

    const renderPage = (products, loop) => {
        const listItem = products.map(item => (
            <div key={item.id}>
                <ProductItemComponent {...item}/>
            </div>
        ));
        if (!loop) {
            const loadMore = (
                <div className="slider-load-more" key={uuid()}>
                    <Link to="#" className='more btn btn--rounded btn--border'>Load More</Link>
                </div>
            )
            listItem.push(loadMore);
        }
        return listItem;
    }
    
    return (
        <div className="products-carousel"> 
            <Swiper {...params} className="swiper-wrapper">
                {                    
                    renderPage(props.products, props.loop)
                }
            </Swiper>
        </div>
    )
}

export default React.memo(ProductCarouselComponent);
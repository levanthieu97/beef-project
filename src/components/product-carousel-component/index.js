import React, {useState, useRef} from 'react';
import Swiper from 'react-id-swiper';
import ProductItemComponent from '../product-item-component';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

const ProductCarouselComponent = (props) => {
    const swiperRef = useRef(null);
    const [slideActive, setSlideActive] = useState(0);
    let lengthProducts = 0;
    const params = {
        observer: true,
        observeParents: true,
        spaceBetween: 20,
        loop: false,
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

    const goPrev = () => {
        if(swiperRef.current) {
            const activeIndex = swiperRef.current.swiper.activeIndex;
            swiperRef.current.swiper.slideTo(activeIndex - 4);
            setSlideActive(swiperRef.current.swiper.activeIndex)
        }
    }

    const goNext = () => {
        if(swiperRef.current) {
            const activeIndex = swiperRef.current.swiper.activeIndex;
            swiperRef.current.swiper.slideTo(activeIndex + 4);
            setSlideActive(swiperRef.current.swiper.activeIndex)
        }
    }

    const renderPage = (products, showLoadMore) => {
        const listItem = products.map(item => (
            <div key={item.id}>
                <ProductItemComponent {...item}/>
            </div>
        ));
        if (showLoadMore) {
            const loadMore = (
                <div className="slider-load-more" key={uuid()}>
                    <Link to="#" className='more btn btn--rounded btn--border'>Load More</Link>
                </div>
            )
            listItem.push(loadMore);
        }
        lengthProducts = listItem.length;
        return listItem;
    }
    
    return (
        <div className="products-carousel">
            <button type="button" className={`swiper-btn swiper-button-prev ${slideActive > 0 ? 'active' : 'no-active'}`} onClick={goPrev}><FaAngleLeft /></button>
            <Swiper {...params} className="swiper-wrapper" ref={swiperRef}>
                {                    
                    renderPage(props.products, props.showLoadMore)
                }
            </Swiper>
            <button type="button" className={`swiper-btn swiper-button-next ${slideActive < (lengthProducts - 4) ? 'active' : 'no-active'}`} onClick={goNext}><FaAngleRight/></button>
        </div>
    )
}

export default React.memo(ProductCarouselComponent);
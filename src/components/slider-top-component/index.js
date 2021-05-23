import React from 'react';
import {Link} from 'react-router-dom';
import Swiper from 'react-id-swiper';
import SwiperCore, {EffectFade, Navigation, Pagination , Autoplay} from 'swiper';

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const SliderTopComponent = (props) => {
    const params = {
        effect: 'fade',
        centeredSlides: true,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }

    return (
        <section className="page-intro banner-top">
            <Swiper {...params}>
                <div>
                    <div className="page-intro__slide" style={{backgroundImage: "url('/beef/images/slide-1.jpg')"}}>
                        <div className="component-container">
                            <div className="page-intro__slide__content">
                                <h2>Sale of the summer collection</h2>
                                <Link to="#" className="btn-shop">
                                    Shop now<i className="icon-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="page-intro__slide" style={{backgroundImage: "url('/beef/images/slide-2.jpg')"}}>
                        <div className="component-container">
                            <div className="page-intro__slide__content">
                                <h2>Make your house into a home</h2>
                                <Link to="#" className="btn-shop">
                                    Shop now <i className="icon-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Swiper>
            <div className="shop-data">
                <div className="component-container">
                    <ul className="shop-data__items">
                        <li>
                            <i className="icon-shipping"></i>
                            <div className="data-item__content">
                                <h4>Free Shipping</h4>
                                <p>On purchases over $199</p>
                            </div>
                        </li>
                        <li>
                            <i className="icon-delivery-fast"></i>
                            <div className="data-item__content">
                                <h4>Fast Delivery</h4>
                                <p>Now Deli is food delivery anywhere you go.</p>
                            </div>
                        </li>
                        <li>
                            <i className="icon-cash"></i>
                            <div className="data-item__content">
                                <h4>Fresh Meat</h4>
                                <p>The most delicious dishes you'll want to try</p>
                            </div>
                        </li>
                    </ul>   
                </div>
            </div>
        </section>
    )
}

export default React.memo(SliderTopComponent)
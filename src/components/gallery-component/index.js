import React, {useState, useRef}  from 'react';
import Swiper from 'react-id-swiper';
import {BsCaretUp, BsCaretDown} from 'react-icons/bs';

const GalleryComponent = (props) => {
    const [mainImage, setMainImage] = useState(props.images[0]);
    console.log(props.images[0]);
    console.log(mainImage);
    const swiperRef = useRef(null);
    const params = {
        observer: true,
        observeParents: true,
        spaceBetween: 30,
        centeredSlides: false,
        watchOverflow: true,
        slidesPerView: 4.3,
        direction: "vertical",
        controller: {
            inverse: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 4.3,
                spaceBetween: 10
            }
        }
    }

    const goUp = () => {
        if(swiperRef.current) {
            console.log(swiperRef.current.swiper);
            swiperRef.current.swiper.slidePrev();
        }
    }

    const goDown = () => {
        if(swiperRef.current) {
            console.log(swiperRef.current.swiper);
            swiperRef.current.swiper.slideNext();
        }
    }
    
    return (
        <section className="product-gallery">
            <div className="product-gallery__thumbs">
                {(props.images.length > 4) && <button type="button" className="swiper-btn btn-up" onClick={goUp}><BsCaretUp/></button> } 
                <Swiper {...params} ref={swiperRef}>
                    {
                        props.images.map((image,index) => (
                            <div key={index} className={`product-gallery__thumb ${image === mainImage ? 'img-active' : ''}`} onClick={() => setMainImage(image)}>
                                <img src={image} alt=""/>
                            </div>
                        ))
                    }
                </Swiper>                    
                {(props.images.length > 4) && <button type="button" className="swiper-btn btn-down" onClick={goDown}><BsCaretDown/></button>}
            </div>

            <div className="product-gallery__image">
                <img src={mainImage} alt=""/>
            </div>
        </section>
    )
}

export default React.memo(GalleryComponent);
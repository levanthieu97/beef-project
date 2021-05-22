import React from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuid, v4} from 'uuid';

const ProductTypeBannerComponent = (props) => {

    const bannerList = [
        {
            type: 'Entrecote',
            name: 'Veal Entrecote',
            urlImage: '/beef/images/slide-1.jpg',
            nutritionFact: [
                {
                    leftInfo: 'Protein',
                    leftValue: '26.1',
                    unit: 'Grams',
                    rightInfo: 'Fat',
                    rightValue: '9.1'
                },
                {
                    leftInfo: 'Carbohydrates',
                    leftValue: '6.1',
                    unit: 'Grams',
                    rightInfo: 'Fiber',
                    rightValue: '1.1'
                },
                {
                    leftInfo: 'Water',
                    leftValue: '31.7',
                    unit: 'Grams',
                    rightInfo: 'Sugar',
                    rightValue: '7.8'
                }
            ]
        },
        {
            type: 'Tenderloin',
            name: 'Beef Tenderloin',
            urlImage: '/beef/images/slide-2.jpg',
            nutritionFact: [
                {
                    leftInfo: 'Protein',
                    leftValue: '26.1',
                    unit: 'Grams',
                    rightInfo: 'Fat',
                    rightValue: '9.1'
                },
                {
                    leftInfo: 'Carbohydrates',
                    leftValue: '6.1',
                    unit: 'Grams',
                    rightInfo: 'Fiber',
                    rightValue: '1.1'
                },
                {
                    leftInfo: 'Water',
                    leftValue: '31.7',
                    unit: 'Grams',
                    rightInfo: 'Sugar',
                    rightValue: '7.8'
                }
            ]
        },
        {
            type: 'ribs',
            name: 'Beef ribs',
            urlImage: '/beef/images/slide-1.jpg',
            nutritionFact: [
                {
                    leftInfo: 'Protein',
                    leftValue: '26.1',
                    unit: 'Grams',
                    rightInfo: 'Fat',
                    rightValue: '9.1'
                },
                {
                    leftInfo: 'Carbohydrates',
                    leftValue: '6.1',
                    unit: 'Grams',
                    rightInfo: 'Fiber',
                    rightValue: '1.1'
                },
                {
                    leftInfo: 'Water',
                    leftValue: '31.7',
                    unit: 'Grams',
                    rightInfo: 'Sugar',
                    rightValue: '7.8'
                }
            ]
        }
    ]

    const renderBanner = (bannerList) => {
        return bannerList.map((banner, index) => (
            <div className={`banner-wrap ${banner.type}`} key={index}>
                <div className="banner-item">
                    <img src={banner.urlImage}></img>
                    <div className="banner-info">
                        <span className="banner-name">
                            {banner.name}
                        </span>
                    </div>
                    <div className="info-details">
                        <div className="item-info-details">
                            {banner.nutritionFact.map((nutrition, index) => (
                                <div className="more-line-info" key={v4()}>
                                    <div className="line-background left-info">
                                        <div className="info-name">
                                            <span>{nutrition.leftInfo}</span>
                                        </div>
                                        <div className="info-value">
                                            <span className="">{nutrition.leftValue}</span>
                                        </div>
                                    </div>
                                    <div className="info-unit">
                                        <span>{nutrition.unit}</span>
                                    </div>
                                    <div className="line-background right-info">
                                        <div className="info-name">
                                            <span>{nutrition.rightInfo}</span>
                                        </div>
                                        <div className="info-value">
                                            <span className="">{nutrition.rightValue}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="footer-button">
                        <button type="button" className="btn btn-cart">ADD TO CART</button>
                    </div>
                </div>
            </div>
        ))
    }
    
    return (
        <section className="products-type__component"> 
            <div className="icon-layer"></div>
            <div className="products-type__container">
                <div className="type-title">
                    <h2>Services For You</h2>
                </div>
                <div className="type-content">
                    <div className="banner-track">
                        {renderBanner(bannerList)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(ProductTypeBannerComponent);
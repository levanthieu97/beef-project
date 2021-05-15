import React from 'react';
import {Link} from 'react-router-dom';

const BannerCategoryComponent = (props) => {

    const bannerDataList = [
        {
            imageUrl: 'url(/popcorn/images/featured-1.jpg)',
            className: 'featured-item featured-item-large',
            content: 'New arrivals are now in!',
            textButton: 'Show Collection',
        },
        {
            imageUrl: 'url(/popcorn/images/featured-2.jpg)',
            className: 'featured-item featured-item-small-first',
            content: 'Basic t-shirts $29,99',
            textButton: 'More Details',
        },
        {
            imageUrl: 'url(/popcorn/images/featured-3.jpg)',
            className: 'featured-item featured-item-small',
            content: 'Sale this summer',
            textButton: 'VIEW ALL',
        }
    ]

    const renderBanner = bannerDataList.map((banner, index) => {
        return (
            <React.Fragment key={index}>
                <article style={{backgroundImage: banner.imageUrl}} className={banner.className}>
                    <div className="featured-item__content">
                        <h3>{banner.content}</h3>
                        <Link to="#" className="btn btn--rounded">{banner.textButton}</Link>
                    </div>
                </article>
            </React.Fragment>
        )
    })

    return (
        <section className="featured">
            <div className="container">
                {renderBanner}
            </div>
        </section>
    )
}

export default React.memo(BannerCategoryComponent);
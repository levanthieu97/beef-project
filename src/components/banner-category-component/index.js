import React from 'react';
import {Link} from 'react-router-dom';

const BannerCategoryComponent = (props) => {

    const bannerDataList = [
        {
            imageUrl: 'url(/beef/images/featured-1.jpg)',
            className: 'featured-item featured-item-large',
        },
        {
            imageUrl: 'url(/beef/images/featured-2.jpg)',
            className: 'featured-item featured-item-small-first',
            content: 'SPECIAL MEAT',
            textButton: 'More Details',
        }
    ]

    const renderBanner = bannerDataList.map((banner, index) => {
        return (
            <React.Fragment key={index}>
                <article style={{backgroundImage: banner.imageUrl}} className={banner.className}>
                    {banner.content && 
                        <div className="featured-item__content">
                            <h3>{banner.content}</h3>
                            <Link to="#" className="btn btn--rounded">{banner.textButton}</Link>
                        </div>
                    }
                </article>
            </React.Fragment>
        )
    })

    return (
        <section className="featured">
            <div className="container featured__meat">
                {renderBanner}
            </div>
        </section>
    )
}

export default React.memo(BannerCategoryComponent);
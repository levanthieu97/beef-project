import React from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

const BlogNewsComponent = (props) => {
    const newsList = [
        {
            image: '/beef/images/products/beef-1.jpg',
            author: 'admin',
            createdDate: 'Jun 14 2020',
            newsTitle: 'Processors to move from whole bird to chicken parts',
            content: 'The handling plant is the halfway point in the ranch to-fork natural pecking order.It is essential to deal with the birds that are gotten to guarantee their welfare and to streamline the saleable item',
        },
        {
            image: '/beef/images/products/beef-5.jpg',
            author: 'admin',
            createdDate: 'Jun 14 2020',
            newsTitle: 'Processors to move from whole bird to chicken parts',
            content: 'The handling plant is the halfway point in the ranch to-fork natural pecking order.It is essential to deal with the birds that are gotten to guarantee their welfare and to streamline the saleable item',
        },
        {
            image: '/beef/images/slide-2.jpg',
            author: 'admin',
            createdDate: 'Jun 14 2020',
            newsTitle: 'Processors to move from whole bird to chicken parts',
            content: 'The handling plant is the halfway point in the ranch to-fork natural pecking order.It is essential to deal with the birds that are gotten to guarantee their welfare and to streamline the saleable item',
        }

    ];

    const renderNewsList = (newsList) => {
        return newsList.map(news => (
            <div className="col-lg-4 col-md-6 col-sm-12 news-blog" key={uuid()}>
                <div className="news-block-one">
                    <div className="inner-box">
                        <figure className="image-box">
                            <Link to="#">
                                <img src={news.image} className="news-img"/>
                            </Link>
                        </figure>
                        <div className="lower-content">
                            <div className="post-info">
                                <span>by {news.author}, {news.createdDate}</span>
                            </div>
                            <h4>
                                <Link className="title-info" to="#">{news.newsTitle}</Link>
                            </h4>
                            <p>{news.content}</p>
                            <div className="more-info">
                                <Link to="#">READ MORE <i className="icon-right"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    };

    return (
        <section className="blog-news">
            <div className="blog-news__container component-container">
                <div className="blog-title text-centred">
                    <span>Blog & News</span>
                    <h2>Lastest Blog Posts</h2>
                </div>
                <div className="news-list row">
                    {renderNewsList(newsList)}
                </div>
            </div>
        </section>
    )
}

export default React.memo(BlogNewsComponent);
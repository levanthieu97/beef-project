import React from "react";
import ReactStars from "react-rating-stars-component";
import {v1 as uuid} from "uuid"

const CustomerReviewComponent = (props) => {
    const createMarkup = (content) => {
        return {__html: content};
      }

    return (
        <section className="reviews-list">
          {props.reviews.map(review => (
            <div key={uuid()} className="review-item">
              <div className="review__avatar">
                <img src={ review.avatar } alt="avatar" />
              </div>
              
              <div className="review__content">
                  <div className="heading-element">
                      <div className="info-buyer">
                        <h3>{ review.name }</h3>
                        <span>Verified Buyer</span>
                      </div>
                      <span className="date">{review.date}</span>
                  </div>
                <ReactStars
                    count={5}
                    value={review.punctuation}
                    size={24}
                    edit={false}
                    activeColor="#86c440"
                />
                <div className="review__comment" dangerouslySetInnerHTML={createMarkup(review.description)}>
                </div>
              </div>
            </div>
          ))}
        </section>
      );
}

export default React.memo(CustomerReviewComponent);
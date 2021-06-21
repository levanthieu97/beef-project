import React from "react";

const CustomerReviewComponent = (props) => {
    
    return (
        <div className="customer-review__wrapper">
            <h3 className="heading title-review">Customer Review</h3>
            <h2 className="subheading title-review">What others are saying</h2>
            <div className="review-main">
                <div className="main-widget review-display-wrapper">
                    <div className="product-rating">
                        <div className="rating-start">
                            <span className="rating-label">4 Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default React.memo(CustomerReviewComponent);
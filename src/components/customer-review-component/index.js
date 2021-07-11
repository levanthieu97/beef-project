import React, {useState} from "react";
import ReactStars from "react-rating-stars-component";
import CustomerCommentComponent from "./customer-comment-component";
import {reviews} from '../../utils/foundation'
import PaginationProductsComponent from '../pagination-products-component';


const CustomerReviewComponent = (props) => {

    const [currentPage, setCurrentPage] = useState(1);

    const onChangeCurrPage = (currPage) => {
        setCurrentPage(currPage);
    }
    return (
        <div className="customer-review__wrapper">
            <h3 className="heading title-review">Customer Review</h3>
            <h2 className="subheading title-review">What others are saying</h2>
            <div className="review-main">
                <div className="main-widget review-display-wrapper">
                    <div className="product-rating">
                        <div className="rating-star">
                            <ReactStars
                                count={5}
                                value={4}
                                isHalf={true}
                                size={35}
                                edit={false}
                                activeColor="#86c440"
                            />
                        </div>
                        <span className="rating-label">4 Reviews</span>
                    </div>
                </div>
                <div className="box-review">
                    <CustomerCommentComponent reviews={reviews}/>
                    <div className="products-content__list-pages">
                        <PaginationProductsComponent totalRecords={80} pageLimit={10} neighbors={1} onPageChanged={onChangeCurrPage}/>
                    </div>
                    <div className="write-btn-review-container">
                        <button type="button" className="btn-review">Write a review</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default React.memo(CustomerReviewComponent);
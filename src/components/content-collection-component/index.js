import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import LazyLoad from "react-lazy-load";
import {data} from '../top-sell-component/data';
import ProductItemComponent from '../product-item-component';
import {setFilterOpen} from '../../store/actions/GlobalAction';
import PaginationProductsComponent from '../pagination-products-component';

const ContentCollectionComponent = (props) => {
    
    const {filterOpen} = useSelector(state => state.globalSlice);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const setFilterOpenDisplay = (filterOpen) => {
        dispatch(setFilterOpen(filterOpen));
    }

    const onChangeCurrPage = (currPage) => {
        setCurrentPage(currPage);
    }
    
    return (
        <section className="products-content">
            <div className="products-content__intro">
                <h2>Collections <span>(79)</span></h2>
                <button type="button" onClick={() => setFilterOpenDisplay(!filterOpen)} className="products-filter-btn">
                    <i className="icon-filters"></i>
                </button>
                <form className={`products-content__filter`}>
                    <div className="products__filter__select">
                        <h4>Sort by:</h4>
                        <div className="select-wrapper">
                            <select>
                                <option>Newest</option>
                                <option>Price (high - low)</option>
                                <option>Price (low - high)</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <LazyLoad>
                <section className="products-list">
                    {data.map(item => (
                        <ProductItemComponent {...item} key={item.id}/>
                    ))}
                </section>
            </LazyLoad>
            <div className="products-content__list-pages">
                <PaginationProductsComponent totalRecords={80} pageLimit={10} neighbors={1} onPageChanged={onChangeCurrPage}/>
            </div>
        </section>
    )
}

export default React.memo(ContentCollectionComponent);
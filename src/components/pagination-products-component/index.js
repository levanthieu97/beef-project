import React, {useState} from "react";
import _ from 'lodash';
import {Link} from 'react-router-dom';

const PaginationProductsComponent = (props) => {
    let pageNeighbors = Math.max(0, Math.min(props.neighbors, 2));
    const totalPages = Math.ceil(props.totalRecords/props.pageLimit);
    const [currPage, setCurrPage] = useState(1);
    const LEFT_PAGE = 'LEFT';
    const RIGHT_PAGE = 'RIGHT';

    const changePage = (page) => {
        setCurrPage(Math.max(0, Math.min(page, totalPages)));
        props.onPageChanged(currPage);
    }

    const fetchPageNumber = () => {
        const totalNumber = (pageNeighbors * 2) + 3;
        console.log(totalNumber)
        const totalBlocks = totalNumber + 2;

        if(totalPages > totalBlocks) {
            const startPage = Math.max(2, currPage - pageNeighbors);
            const endPage = Math.min(totalPages - 1, currPage + pageNeighbors);
            let pages = _.range(startPage, endPage+1);

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumber - (pages.length + 1);

            switch(true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = _.range(startPage - spillOffset, startPage);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill) : {
                    const extraPages = _.range(endPage + 1, endPage + spillOffset+1);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }

                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill): 
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }

            return [1, ...pages, totalPages];
        }
        return _.range(1, totalPages+1);
    }

    const renderPage = () => {
        const pageNumber = fetchPageNumber();
        return(
            <nav aria-label="Countries Pagination">
                <ul className="pagination-list">
                    {
                        pageNumber.map((page, index) => {
                            if(page === LEFT_PAGE) return (
                                <li key={index} className="page-item">
                                    <Link className="page-link" to="#" aria-label="Previous" onClick={() => changePage(currPage -1)}>
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </Link>
                                </li>
                            );

                            if (page === RIGHT_PAGE) return (
                                <li key={index} className="page-item">
                                    <Link className="page-link" to="#" aria-label="Next" onClick={() => changePage(currPage +1)}>
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </Link>
                                </li>
                            );

                            return (
                                <li key={index} className={`page-item${ currPage === page ? ' active' : ''}`}>
                                    <Link className="page-link" to="#" onClick={() => changePage(page)}>{ page }</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        )
    }

    return (props.totalRecords || totalPages !== 1) && (
        <nav className="products-pagination__wrapper">
            {renderPage()}
        </nav>
    )
}

export default React.memo(PaginationProductsComponent);
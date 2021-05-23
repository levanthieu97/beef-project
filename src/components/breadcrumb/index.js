import React from 'react';
import {Link} from 'react-router-dom';


const Breadcrumb = (props) => {

    return (
        <section className="breadcrumb-section">
            <div className="component-container">
                <ul className="breadcrumb-list">
                    <li><Link to="/#"><i className="icon-home"></i></Link></li>
                    <li>All Products</li>
                </ul>
            </div>
        </section>
    )
}

export default React.memo(Breadcrumb);
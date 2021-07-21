import React from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';


const Breadcrumb = (props) => {

    return (
        <section className="breadcrumb-section">
            <div className="component-container">
                <ul className="breadcrumb-list">
                    <li><Link to="/#"><i className="icon-home"></i></Link></li>
                    {props.breadcrumbList && props.breadcrumbList.map(breadcrumb => (
                        <li key={uuid()}>
                            {breadcrumb.link ? <Link to={breadcrumb.link}>{breadcrumb.title}</Link> : breadcrumb.title}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default React.memo(Breadcrumb);
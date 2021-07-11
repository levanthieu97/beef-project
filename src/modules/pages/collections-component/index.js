import React from 'react';
import {HotNewsComponent, Breadcrumb, LeftFilterComponent, ContentCollectionComponent} from '../../../components';

const components = [
    LeftFilterComponent,
    ContentCollectionComponent
]

const CollectionsComponent = (props) => {

    const renderComponent = components.map((Component, index) => {           
        return  <Component key={index}/>
    })

    const breadcrumbList = [
        {
            link: '/collections',
            title: 'collections'
        }
    ];

    return (
        <React.Fragment>
            <HotNewsComponent />
            <Breadcrumb breadcrumbList={breadcrumbList}/>
            
            <section className="products-page">
                <div className="component-container">
                    {renderComponent}
                </div>
            </section>
        </React.Fragment>
    );
}
export default React.memo(CollectionsComponent)
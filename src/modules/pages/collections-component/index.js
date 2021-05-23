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

    return (
        <React.Fragment>
            <HotNewsComponent />
            <Breadcrumb />
            <section className="products-page">
                <div className="component-container">
                    {renderComponent}
                </div>
            </section>
        </React.Fragment>
    );
}
export default React.memo(CollectionsComponent)
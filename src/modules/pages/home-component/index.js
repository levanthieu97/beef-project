import React from 'react';
import {SliderTopComponent, BannerCategoryComponent, TopSellComponent, ProductTypeBannerComponent, NewArrivalsComponent, BlogNewsComponent} from '../../../components';

const components = [
    SliderTopComponent,
    NewArrivalsComponent,
    ProductTypeBannerComponent,
    TopSellComponent,
    // BenefitBannerComponent,
    BannerCategoryComponent,
    BlogNewsComponent
]

const HomeComponent = (props) => {  
    const renderComponent = components.map((Component, index) => {           
        return  <Component key={index}/>
    })

    return (
        <React.Fragment>
            {renderComponent}
        </React.Fragment>
    );
}

export default React.memo(HomeComponent);

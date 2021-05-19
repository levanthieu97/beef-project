import React from 'react';
import {SliderTopComponent, BannerCategoryComponent, TopSellComponent, BenefitBannerComponent, ProductTypeBannerComponent, NewArrivalsComponent} from '../../../components';

const components = [
    SliderTopComponent,
    NewArrivalsComponent,
    BannerCategoryComponent,
    TopSellComponent,
    BenefitBannerComponent,
    ProductTypeBannerComponent
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

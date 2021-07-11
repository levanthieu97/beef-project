import React, {useEffect, useReducer} from 'react';
import {useSelector} from "react-redux";
import _ from 'lodash';
import {data} from '../../../components/top-sell-component/data';
import {
    HotNewsComponent, 
    Breadcrumb, 
    GalleryComponent, 
    ProductDetailsInfo, 
    TabProductDetail, 
    RelatedProductComponent,
    CustomerReviewComponent
} from '../../../components';

const ProductsComponent = (props) => {
    
    const {selectedProduct} = useSelector(state => state.productsSlice);
    console.log(selectedProduct);
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            choseProduct: {},
        }
    )
    const breadcrumbList = [
        {
            link: '/collections',
            title: 'beef'
        },
        {
            link: '',
            title: selectedProduct.name
        }
    ];
    const listImageProducts = [
        selectedProduct.primaryImage,
        selectedProduct.hoverImage,
        "/beef/images/products/beef-3.jpg",
        "/beef/images/products/beef-4.jpg",
        "/beef/images/products/beef-5.jpg",
        "/beef/images/products/beef-7.jpg",
    ]

    useEffect(() => {
        if(_.isEmpty(selectedProduct)) {
            const productName = _.lowerCase(window.location.pathname.split('/').pop());
            const productActive = _.find(data, function(product) {
                return _.lowerCase(product.name) === productName;
            })
            setState({choseProduct: productActive});
        }
    }, [selectedProduct])
    
    return (
        <React.Fragment>
            <HotNewsComponent />
            <Breadcrumb breadcrumbList={breadcrumbList}/>

            <section className="product-single">
                <div className="component-container">
                    <div className="product-single__content">
                        <GalleryComponent images={listImageProducts}/>
                        <ProductDetailsInfo {...selectedProduct}/>
                    </div>
                    <div className="related-products__container">
                        <RelatedProductComponent />
                    </div>
                    <div className="product-single__info">
                        <TabProductDetail/>
                    </div>
                    <div className="customer-review__container">
                        <CustomerReviewComponent />
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}

export default React.memo(ProductsComponent);

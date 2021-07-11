import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet, HelmetProvider  } from 'react-helmet-async';
import CommonActions from '../../../common/CommonActions';
import {setEmptyCart} from '../../../store/actions/GlobalAction';
const Header = CommonActions.lazyWithPreload(() => import ("../../layouts/header"));
const Footer = CommonActions.lazyWithPreload(() => import ("../../layouts/footer"));
const PageContainer = (props) => {
    const dispatch = useDispatch()
    const {cartItems} = useSelector(state => state.cartSlice);
    const {isEmptyCart} = useSelector(state => state.globalSlice);
    useEffect(() => {
        if(cartItems.length === 0 && props.match.params[0] === "checkout") {
            props.history.push("/")
        } else if( cartItems.length > 0 && isEmptyCart) {
            dispatch(setEmptyCart(false));
        } else if( cartItems.length === 0 && !isEmptyCart) {
            dispatch(setEmptyCart(true));
        }
    }, [])
    const pageTitle = props.title;
    const BodyComponent = props.container;
    
    return (
        <HelmetProvider >
            <div className="app-main">
                <Helmet>
                    <meta charSet='utf-8'/>
                    <meta property='og:title' content={pageTitle}/>
                    <meta property='og:description' content={pageTitle}/>
                    <meta name='description' content={pageTitle}/>
                    <title>{pageTitle}</title>
                </Helmet>
                <Suspense fallback={null}>
                    <Header/>
                    <main className={`${props.location.pathname !== '/' ? 'main-page' : ''} ${props.classNamePage}`}>
                        <BodyComponent/>
                    </main>
                    <Footer/>  
                </Suspense>
            </div>
        </HelmetProvider>
    )
}
export default React.memo(PageContainer);
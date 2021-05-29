import React, { Suspense } from 'react'
import { Helmet, HelmetProvider  } from 'react-helmet-async';
import CommonActions from '../../../common/CommonActions';
const Header = CommonActions.lazyWithPreload(() => import ("../../layouts/header"));
const Footer = CommonActions.lazyWithPreload(() => import ("../../layouts/footer"));
const PageContainer = (props) => {
 
    const pageTitle = props.title;
    console.log(props);

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
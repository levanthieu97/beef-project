import React from 'react';
import PageContainer from '../../modules/pages/page-container';
import { Route } from 'react-router-dom';

const RouteChild = (props) => {
    console.log("***")
    console.log(props)
    function renderPage(props, title, classNamePage, container) {
        // call actions update container to state template
        return (
            <PageContainer {...props} title={title} classNamePage={classNamePage} container={container} />
        )
    }
    console.log(props);
    return (
        <Route exact={props.exact} path={props.path} children={(route) => renderPage(route, props.meta.title, props.pageContainer, props.container)}/>
    )
}

export default React.memo(RouteChild);
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DEFAULT_ROUTES } from './path';
import { EVENT } from '../events/ListEvents';
import CommonActions from '../common/CommonActions';
import PageContainer from '../modules/pages/page-container';
import { updateWaitLoading } from '../store/actions/GlobalAction';
import ScrollToTop from '../components/scroll-to-top';
import '../styles/css/beef/progress.css';
import {v4 as uuid} from 'uuid';

const Routes = (props) => {
    const dispatch = useDispatch();
    const {isWait} = useSelector(state => state.globalSlice);
    useEffect(() => {
        initLoaded();
        window.listenEvent(EVENT.LOADED_CSS, updateProgressLoading);
        return () => {
            window.stopListenEvent(EVENT.LOADED_CSS, updateProgressLoading);
        }
    }, [])

    function updateProgressLoading() {
        dispatch(updateWaitLoading(false));
    }

    function initLoaded() {
        CommonActions.getActionStyle();
    }

    function renderRoutes() {
        return ( 
            <Switch>               
                {DEFAULT_ROUTES.map(route=> (
                    <Route key={uuid()}
                    exact={route.exact} 
                    path={route.path} 
                    render={routeProps => <PageContainer {...routeProps} title={route.meta.title} classNamePage={route.pageContainer} container={route.container}/>}/>
                ))}
            </Switch>    
        )
    }
    
    if(isWait){
        return CommonActions.loadingProgress();
    }

    return (
        <BrowserRouter basename=''>
            <ScrollToTop/>
            <div id="wrapper">
                {renderRoutes()}
            </div>
        </BrowserRouter>
    );
};
export default React.memo(Routes)
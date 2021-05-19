import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import RouteChild from './routes';
import { DEFAULT_ROUTES } from './path';
import { EVENT } from '../events/ListEvents';
import CommonActions from '../common/CommonActions';
import { updateWaitLoading } from '../store/actions/GlobalAction';
import '../styles/css/beef/progress.css';

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
                {DEFAULT_ROUTES.map((route, i) => (
                    <RouteChild key={i} {...route} />
                ))}
            </Switch>    
        )
    }
    
    if(isWait){
        return CommonActions.loadingProgress();
    }

    return (
        <BrowserRouter basename=''>
            <div id="wrapper">
                {renderRoutes()}
            </div>
        </BrowserRouter>
    );
};
export default React.memo(Routes)
import React from "react";
import {LoginFormComponent, RegisterComponent} from '../../../components';
import { useLocation } from "react-router";

const LoginComponent = (props) => {
    const location = useLocation();
    return (
        <div className="login-page">
            <div className="component-container">
                {location.pathname.includes("register") ? <RegisterComponent/> : <LoginFormComponent/>}
            </div>
        </div>
        )
    }

export default React.memo(LoginComponent);
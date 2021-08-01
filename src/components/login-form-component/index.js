import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import _ from "lodash";

const LoginFormComponent = (props) => {
    const {register, handleSubmit, formState: {errors}, trigger} = useForm();
    const history = useHistory();
    const login = (data) => {
        console.log(data);
    }

    const redirectRegister = () => {
        history.push("/account/register");
    }
    
    return (
        <div className="page-content-fixScreen login-form-container">
            <div className="form-container row">
                <div className="login-form-wrapper col-md-8 col-sm-8">
                    <header className="form-header">
                        <div className="header-title">Your account for everything nowdeli</div>
                    </header>
                    <form onSubmit={handleSubmit(login)} className="form-content">
                        <div className="field-content">
                            <label className="label-input" htmlFor="email">
                                <span>Email:</span>
                            </label>
                            <div className="fieldset">
                                <input
                                    className={`form__input ${errors.email ? 'validate-fail' : ''}`}
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    {...register("email", {
                                        require: true,
                                        validate: (value) =>  {return !_.isEmpty(value)}
                                    })}
                                />
                                {errors.email && <p className="message-errors">Please enter a valid email address.</p>}
                            </div>
                        </div>
                        <div className="field-content">
                            <label className="label-input"  htmlFor="password">
                                <span>Password:</span>
                            </label>
                            <div className="fieldset">
                                <input
                                    className={`form__input ${errors.password ? 'validate-fail' : ''}`}
                                    type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    {...register("password", {
                                        require: true,
                                        validate: (value) =>  {return !_.isEmpty(value)}
                                    })}
                                />
                                {errors.password && <p className="message-errors">Please enter a password.</p>}
                            </div>
                        </div>
                        <div className="action-form">
                            <div className="forgot-password">
                                <span className="title-info">Forgot Your Password?</span>
                            </div>
                            <button type="submit" onClick={() => trigger()} className="btn-login">LOGIN</button>
                            <div className="spec">
                                <span>OR</span>
                            </div>
                            <div className="more-info">
                                <span className="action-redirect" onClick={() => redirectRegister()}>Create An Account<i className="icon-right"/></span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="background-login col-md-4 col-sm-4">
                    <img className="login-logo" src="/beef/images/now-deli-logo.png"/>
                    <div className="message-shop">
                        The Now Deli Shop aims to be your number one source for buying premium quality food
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LoginFormComponent);
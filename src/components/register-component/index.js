import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import _ from "lodash";

const RegisterComponent = (props) => {
    const {register, handleSubmit, formState: {errors}, trigger} = useForm();
    const history = useHistory();
    const registerAccount = (data) => {
        console.log(data);
    }
    const redirectLogin = () => {
        history.push("/account/login");
    }

    return (
        <div className="page-content-fixScreen register-form-container">
            <div className="form-container">
                <div className="login-form-wrapper">
                    <header className="form-header">
                        <div className="header-title">Create your Now Deli account</div>
                    </header>
                    <form onSubmit={handleSubmit(registerAccount)} className="form-content">
                        <div className="field-content">
                            <label className="label-input" htmlFor="firstName">
                                <span>First name:</span>
                            </label>
                            <div className="fieldset">
                                <input
                                    className={`form__input ${errors.firstName ? 'validate-fail' : ''}`}
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    {...register("firstName", {
                                        require: true,
                                        validate: (value) =>  {return !_.isEmpty(value)}
                                    })}
                                />
                                {errors.firstName && <p className="message-errors">Please enter your first name.</p>}
                            </div>
                        </div>
                        <div className="field-content">
                            <label className="label-input"  htmlFor="lastName">
                                <span>Last name:</span>
                            </label>
                            <div className="fieldset">
                                <input
                                    className={`form__input ${errors.lastName ? 'validate-fail' : ''}`}
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    {...register("lastName", {
                                        require: true,
                                        validate: (value) =>  {return !_.isEmpty(value)}
                                    })}
                                />
                                {errors.lastName && <p className="message-errors">Please enter your last name.</p>}
                            </div>
                        </div>
                        <div className="field-content">
                            <label className="label-input"  htmlFor="email">
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
                                    placeholder="Enter your last name"
                                    {...register("password", {
                                        require: true,
                                        validate: (value) =>  {return !_.isEmpty(value)}
                                    })}
                                />
                                {errors.password && <p className="message-errors">Please enter your password.</p>}
                            </div>
                        </div>
                        <div className="action-form">
                            <button type="submit" onClick={() => trigger()} className="btn-login">CREATE MY ACCOUNT</button>
                            <div className="spec">
                                <span>OR</span>
                            </div>
                            <div className="more-info">
                                <span className="label-title">Already a member? </span><span className="action-redirect" onClick={() => redirectLogin()}>Sign in</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default React.memo(RegisterComponent);
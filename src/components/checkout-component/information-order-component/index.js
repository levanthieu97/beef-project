import React from "react";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import InputComponent from '../../../modules/layouts/input';
import SelectComponent from "../../../modules/layouts/select";
import { fieldShipping, countryRegion, stateUS } from "../../../utils/foundation";
import { useAccordion, CONTEXT_ID } from "../checkout-accordion-component/AccordionContext";
import { updateShippingAddress } from "../../../store/actions/OrderAction"
import { useHistory } from "react-router";
import _ from 'lodash';

const InformationOrderComponent = (props) => {
    const history = useHistory();
    const {firstName, lastName, email, phone, company, apartment, address, city, country, state, zipCode} = useSelector(state => state.orderSlice.infoShippingAddress)
    const dispatch = useDispatch();
    const {handlePanelClick} = useAccordion();
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            company: company,
            apartment: apartment,
            address: address,
            city: city,
            country: country,
            state: state,
            zipCode: zipCode,
        }
    });

    const saveAddress = (data) => {
        dispatch(updateShippingAddress(data));
        handlePanelClick(CONTEXT_ID.SHIPPING);
    }

    return (
        <section className="checkout-info__container">
            <div className="information-contact-wrap">
                <div className="section-title">
                    <h3 className="title-info">Shipping address</h3>
                    <p className="login-account">Already have an account? <span className="btn-login-info">Log in</span></p>
                </div>
                <div className="section-content">
                    <form onSubmit={handleSubmit(saveAddress)}>
                        <div className="form-address-container row">
                            {fieldShipping.map((fieldInput, index) => (
                                <div key={index} className={`form-input-field ${fieldInput.colMd} ${fieldInput.colSm}`}>
                                    <Controller
                                        control={control}
                                        name={fieldInput.type}
                                        rules={{
                                            require: fieldInput.invalid,
                                            validate: value => !_.isEmpty(value) || (!fieldInput.invalid && _.isEmpty(value))
                                        }}
                                        render={({field: {value, onChange}, fieldState}) => (
                                            <InputComponent 
                                                namePlaceHolder={fieldInput.label}
                                                name={fieldInput.nameInput}
                                                label={fieldInput.label}
                                                value={value}
                                                onChange={onChange}
                                                invalid={fieldInput.invalid && fieldState.invalid}
                                            />
                                        )}
                                    />
                                    {errors[fieldInput.type] && fieldInput.invalid && <p className="errors">{`Please enter your ${fieldInput.label}`}</p>}
                                </div>
                            ))}
                            <div className="form-input-field col-md-4 col-sm-4">
                                <Controller
                                    control={control}
                                    name="country"
                                    rules={{
                                        require: true,
                                        validate: value => !_.isEmpty(value)
                                    }}
                                    render={({field: {value, onChange}, fieldState}) => (
                                        <SelectComponent 
                                            name="country"
                                            namePlaceHolder="Country"
                                            label="Country / Region"
                                            value={value}
                                            onChange={onChange}
                                            optionData={countryRegion}
                                            invalid={fieldState.invalid}
                                        />
                                    )}
                                />
                                {errors.country && <p className="errors">Please enter your to Country</p>}
                            </div>
                            <div className="form-input-field col-md-4 col-sm-4">
                                <Controller
                                    control={control}
                                    name="state"
                                    rules={{
                                        require: true,
                                        validate: value => !_.isEmpty(value)
                                    }}
                                    render={({field: {value, onChange}, fieldState}) => (
                                        <SelectComponent 
                                            name="state"
                                            namePlaceHolder="State"
                                            label="State"
                                            value={value}
                                            onChange={onChange}
                                            optionData={stateUS}
                                            invalid={fieldState.invalid}
                                        />
                                    )}
                                />
                                {errors.state && <p className="errors">Please enter your to State</p>}
                            </div>
                            <div className="form-input-field col-md-4 col-sm-4">
                                <Controller
                                    control={control}
                                    name="zipCode"
                                    rules={{
                                        require: true,
                                        validate: value => !_.isEmpty(value)
                                    }}
                                    render={({field: {value, onChange}, fieldState}) => (
                                        <InputComponent 
                                            namePlaceHolder="ZIP code"
                                            name="ZIP code"
                                            label="ZIP code"
                                            value={value}
                                            onChange={onChange}
                                            invalid={fieldState.invalid}
                                        />
                                    )}
                                />
                                {errors.zipCode && <p className="errors">Please enter your to Zip code</p>}
                            </div>
                        </div>
                        <div className="section-footer">
                            <div className="return-section" onClick={() => history.push("/cart")}>Return to cart</div>
                            <div className="continue-section">
                                <button type="submit" className="btn-section">Continue to shipping</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default React.memo(InformationOrderComponent);
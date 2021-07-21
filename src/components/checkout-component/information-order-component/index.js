import React from "react";
import { useForm, Controller } from "react-hook-form";
import InputComponent from '../../../modules/layouts/input';
import SelectComponent from "../../../modules/layouts/select";
import { fieldShipping, countryRegion, stateUS } from "../../../utils/foundation";
import { useAccordion, CONTEXT_ID } from "../checkout-accordion-component/AccordionContext";
import { useHistory } from "react-router";
import {v4 as uuid} from 'uuid';

const InformationOrderComponent = (props) => {
    const history = useHistory();
    const {handlePanelClick} = useAccordion();
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            apartment: "",
            address: "",
            city: "",
            country: "",
            state: "",
            zipCode: "",
        }
    });

    const saveAddress = (data) => {
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
                            {fieldShipping.map(field => (
                                <div key={uuid()} className={`form-input-field ${field.colMd} ${field.colSm}`}>
                                    <Controller
                                        control={control}
                                        name={field.type}
                                        render={({field: {value, onChange}}) => (
                                            <InputComponent 
                                                namePlaceHolder={field.label}
                                                name={field.nameInput}
                                                label={field.label}
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </div>
                            ))}
                            <div className="form-input-field col-md-4 col-sm-4">
                                <Controller
                                    control={control}
                                    name="country"
                                    render={({field: {value, onChange}}) => (
                                        <SelectComponent 
                                            name="country"
                                            namePlaceHolder="Country"
                                            label="Country / Region"
                                            value={value}
                                            onChange={onChange}
                                            optionData={countryRegion}
                                        />
                                    )}
                                />
                            </div>
                            <div className="form-input-field col-md-4 col-sm-4">
                                <Controller
                                    control={control}
                                    name="state"
                                    render={({field: {value, onChange}}) => (
                                        <SelectComponent 
                                            name="state"
                                            namePlaceHolder="State"
                                            label="State"
                                            value={value}
                                            onChange={onChange}
                                            optionData={stateUS}
                                        />
                                    )}
                                />
                            </div>
                            <div className="form-input-field col-md-4 col-sm-4">
                                <Controller
                                    control={control}
                                    name="zipCode"
                                    render={({field: {value, onChange}}) => (
                                        <InputComponent 
                                            namePlaceHolder="ZIP code"
                                            name="ZIP code"
                                            label="ZIP code"
                                            value={value}
                                            onChange={onChange}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className="section-footer">
                            <div className="return-cart" onClick={() => history.push("/cart")}>Return to cart</div>
                            <div className="continue-shipping">
                                <button type="submit" className="btn-shipping">Continue to shipping</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default React.memo(InformationOrderComponent);
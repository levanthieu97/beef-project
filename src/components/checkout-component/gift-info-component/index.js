import React, {useState, useReducer, useRef} from "react";
import { MdCardGiftcard } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import CheckBox from '../../left-filter-component/checkbox-component';
import InputComponent from '../../../modules/layouts/input';
import TextAreaComponent from '../../../modules/layouts/textarea';
import _ from "lodash";

const GiftInfoComponent = (props) => {
    const [giftChecked, setGiftChecked] = useState(false);
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
          fromName: "",
          toName: "",
          message: "",
          isSubmitGift: false,  
        }
    )

    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            fromName: "",
            toName: "",
            message: "",
        },
    });

    const checkboxGift = (value) => {
        setGiftChecked(value === "true" ? false : true);
    }

    const saveGiftInfo = (data) => {
        console.log(data);
    }

    const renderGiftForm = () => {

        return giftChecked && (
            <div className="gift-wrap-form">
                <form onSubmit={handleSubmit(saveGiftInfo)}>
                    <div className="form-container row">
                        <div className="form-input-field col-md-6 col-sm-6">
                            <Controller
                                control={control}
                                name="fromName"
                                rules={{
                                    require: true,
                                    validate: value => !_.isEmpty(value)
                                }}
                                render={({field, fieldState}) => (
                                    <InputComponent 
                                        namePlaceHolder="From Name"
                                        name="from"
                                        label="From"
                                        value={field.value}
                                        onChange={field.onChange}
                                        invalid={fieldState.invalid}
                                    />
                                )}
                            />
                            {errors.fromName && <p className="errors">Please enter your form name</p>}
                        </div>
                        <div className="form-input-field col-md-6 col-sm-6">
                            <Controller
                                control={control}
                                name="toName"
                                rules={{
                                    require: true,
                                    validate: value => !_.isEmpty(value)
                                }}
                                render={({field: {value, onChange}, fieldState}) => (
                                    <InputComponent 
                                        namePlaceHolder="To Name"
                                        name="to"
                                        label="To"
                                        value={value}
                                        onChange={onChange}
                                        invalid={fieldState.invalid}
                                    />
                                )}
                            />
                            {errors.toName && <p className="errors">Please enter your to name</p>}
                        </div>
                        <div className="form-input-field col-md-12 col-sm-12">
                            <Controller
                                control={control}
                                name="message"
                                rules={{require: true, maxLength: 100, validate: value => !_.isEmpty(value)}}
                                render={({field: {value, onChange}, fieldState}) => (
                                    <TextAreaComponent 
                                        namePlaceHolder="Message"
                                        name="message"
                                        label="Message"
                                        value={value}
                                        onChange={onChange}
                                        invalid={fieldState.invalid}
                                    />
                                )}
                            />
                            <p className="validate-message">*Max character: 100</p>
                        </div>
                        <div className="form-input-field col-md-12 col-sm-12">
                            <button type="submit" className="btn-submit-gift">Submit</button>
                        </div> 
                    </div>          
                </form>
            </div>
        )
    }

    return (
        <div className="gift-container">
            <div className="cart-gift-item">
                <div className="gift-section-title">
                    <span className="gift-icon"><MdCardGiftcard/></span>
                    <span className="gift-header-title">Is It a Gift?</span>
                </div>
                <div className={`checkbox-label ${giftChecked ? 'gift_collapsed' : ''}`}>
                    <CheckBox 
                        label="Yes, this is a gift"
                        onChange={checkboxGift}
                        value={giftChecked}
                        name=""
                    />
                </div>
                {renderGiftForm()}
            </div>
        </div>
        
    )
}

export default GiftInfoComponent;
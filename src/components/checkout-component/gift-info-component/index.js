import React, {useState, useReducer, useRef} from "react";
import { MdCardGiftcard } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from '../../left-filter-component/checkbox-component';
import InputComponent from '../../../modules/layouts/input';
import TextAreaComponent from '../../../modules/layouts/textarea';
import { updateInfoGift, isCheckGiftOrder } from "../../../store/actions/OrderAction"
import { FaRegEdit } from "react-icons/fa";
import _ from "lodash";

const GiftInfoComponent = (props) => {
    const dispatch = useDispatch();
    const [giftChecked, setGiftChecked] = useState(false);
    const {giftMessage} = useSelector(state => state.orderSlice);
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
          isSubmitGift: false,  
        }
    )

    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            fromName: giftMessage.fromName,
            toName: giftMessage.toName,
            message: giftMessage.message
        },
    });

    const checkboxGift = (value) => {
        setGiftChecked(value === "true" ? false : true);
    }

    const saveGiftInfo = (data) => {
        setState({isSubmitGift: true})
        dispatch(isCheckGiftOrder(giftChecked));
        dispatch(updateInfoGift(data));
    }

    const renderInfoGift = () => {
        return giftChecked && state.isSubmitGift && (
            <div className="gift-info-wrapper">
                <div className="gift-content">
                    <p className="gift-info">From: <span>{giftMessage.fromName}</span></p>
                    <p className="gift-info">To: <span>{giftMessage.toName}</span></p>
                    <p className="gift-info">Message: <span>{giftMessage.message}</span></p>
                    <span className="change-info" onClick={() => setState({isSubmitGift: false})}><FaRegEdit/></span>
                </div>
            </div>
        )
    }

    const renderGiftForm = () => {
        return giftChecked && !state.isSubmitGift && (
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
                            {errors.fromName && <p className="errors">Please enter your from name</p>}
                        </div>
                        <div className="form-input-field col-md-6 col-sm-6">
                            <Controller
                                control={control}
                                name="toName"
                                rules={{
                                    require: true,
                                    validate: value => !_.isEmpty(value)
                                }}
                                render={({field, fieldState}) => (
                                    <InputComponent 
                                        namePlaceHolder="To Name"
                                        name="to"
                                        label="To"
                                        value={field.value}
                                        onChange={field.onChange}
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
                {renderInfoGift()}
            </div>
        </div>
        
    )
}

export default GiftInfoComponent;
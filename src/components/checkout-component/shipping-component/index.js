import React from "react";
import { useSelector } from "react-redux";
import CalendarComponent from "./calendar-component";
import {stateUS} from '../../../utils/foundation';
import CommonActions from '../../../common/CommonActions';
import { useAccordion, CONTEXT_ID } from "../checkout-accordion-component/AccordionContext";

const ShippingComponent = (props) => {
    const {firstName, lastName, email, address, apartment, city, state, zipCode} = useSelector(state => state.orderSlice.infoShippingAddress);
    const codeState = CommonActions.getObjectByValue(stateUS, "value", state);
    const {handlePanelClick} = useAccordion();
    return (
        <div className="shipping-content-container">
            <div className="confirm-info-order">
                <div className="review-block">
                    <div className="review-block-inner">
                        <p className="review-block__label">Contact:</p>
                        <p className="review-block__content">{`${firstName} ${lastName} | ${email}`}</p>
                    </div>
                    <div className="review-block-link" onClick={() => handlePanelClick(CONTEXT_ID.INFORMATION)}>Change</div>
                </div>
                <div className="review-block">
                    <div className="review-block-inner">
                        <p className="review-block__label">Ship to:</p>
                        <p className="review-block__content">{`${address}, ${apartment ? apartment + ', ' : ''} ${city} ${codeState.abbreviation} ${zipCode}`}</p>
                    </div>
                    <div className="review-block-link" onClick={() => handlePanelClick(CONTEXT_ID.INFORMATION)}>Change</div>
                </div>
            </div>
            <div className="calendar-instructions__wrapper">
                <div className="calendar-instructions">Please select the date you would like your order to arrive:</div>
                <CalendarComponent/>
                <div className="attention-wrapper">
                    <p className="attention-label">Attention:</p>
                    <p className="attention-content">
                        <span className="attention-highlight">All product ship frozen,</span> with the exception of dry-aged items, 
                        and can be stored in the freezer for up to 6 months. 
                        Orders can arrive a day early or a day late, so plan accordingly and watch your tracking.
                    </p>
                </div>
            </div>
            <div className="section-footer">
                <div className="return-section" onClick={() => handlePanelClick(CONTEXT_ID.INFORMATION)}>Return to information</div>
                <div className="continue-section">
                    <button type="button" className="btn-section" onClick={() => handlePanelClick(CONTEXT_ID.PAYMENT)}>Continue to payment</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ShippingComponent);
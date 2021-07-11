import React from "react";
import SummaryCartComponent from "./summary-cart-component";
import Accordion, {AccordionPanel, AccordionToggle, AccordionItem} from "./checkout-accordion-component";
import GiftInfoComponent from "./gift-info-component";

const CheckoutComponent = (props) => {
    return (
        <div className="checkout-container">
            <div className="checkout-content row">
                <div className="checkout-products col-md-8 col-sm-12">
                    <Accordion collapsible>
                        <AccordionItem id="shipping">
                            <AccordionToggle>1. Shipping</AccordionToggle>
                            <AccordionPanel>
                                <GiftInfoComponent/>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem id="payment">
                            <AccordionToggle>2. Payment</AccordionToggle>
                            <AccordionPanel>
                                aa
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="summary-orders col-md-4 col-sm-12">
                    <SummaryCartComponent/>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CheckoutComponent);
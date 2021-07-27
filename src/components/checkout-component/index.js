import React from "react";
import SummaryCartComponent from "./summary-cart-component";
import Accordion, {AccordionPanel, AccordionToggle, AccordionItem} from "./checkout-accordion-component";
import GiftInfoComponent from "./gift-info-component";
import InformationOrderComponent from "./information-order-component";
import ShippingComponent from "./shipping-component";

const CheckoutComponent = (props) => {
    return (
        <div className="checkout-container">
            <div className="checkout-content row">
                <div className="checkout-products col-md-8 col-sm-12 order-2 order-md-1">
                    <Accordion collapsible>
                        <AccordionItem id="information">
                            <AccordionToggle>1. Information</AccordionToggle>
                            <AccordionPanel>
                                <GiftInfoComponent/>
                                <InformationOrderComponent />
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem id="shipping">
                            <AccordionToggle>2. Shipping</AccordionToggle>
                            <AccordionPanel>
                                <ShippingComponent/>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem id="payment">
                            <AccordionToggle>3. Payment</AccordionToggle>
                            <AccordionPanel>
                                aa
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="summary-orders col-md-4 col-sm-12 order-1 order-md-2">
                    <SummaryCartComponent/>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CheckoutComponent);
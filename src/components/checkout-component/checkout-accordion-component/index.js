import React, { useState } from "react";

import {
  AccordionContext,
  AccordionItemContext,
  useAccordion,
  useAccordionItem
} from "./AccordionContext";

const Accordion = ({
    defaultActive = "information",
    children,
    collapsible = false,
    ...props
}) => {
    const [activePanel, setActivePanel] = useState(defaultActive);
    const handlePanelClick = (id) => {
        let nextActiveId = id;
        if(collapsible && nextActiveId === activePanel) nextActiveId = null;
        setActivePanel(nextActiveId);
    }

    const value = {
        activePanel,
        handlePanelClick,
        collapsible
    }

    return (
        <AccordionContext.Provider value={value}>
            <div {...props} className="checkout-accordion-container">{children}</div>
        </AccordionContext.Provider>
    )
}

export const AccordionItem = ({id, children, ...props}) => {
    const value = {id};

    return (
        <AccordionItemContext.Provider value={value}>
            <div {...props} className="accordion-item">{children}</div>
        </AccordionItemContext.Provider>
    )
}

export const AccordionToggle = ({children, ...props}) => {
    const {handlePanelClick} = useAccordion();
    const {id} = useAccordionItem();

    return (
        <div className="toggle-header" {...props}>{children}</div>
    )
}

export const AccordionPanel = ({children, ...props}) => {
    const {activePanel} = useAccordion();
    const {id} = useAccordionItem();
    return activePanel === id && (
        <div className="panel-content" {...props}>
            {children}
        </div>
    )
}

export default Accordion;
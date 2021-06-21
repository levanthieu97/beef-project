import React , {useState} from "react";
import {TabContext} from "./SwitcherContext";

export const TabToggle = (props) => {
    return (
        <TabContext.Consumer>
            {(value) => {
                return (
                    <div className={`tab-item ${value.activePanel === props.id ? 'active' : ''}`} onClick={() => value.actions.switchPanel(props.id)}>
                        {props.children}
                    </div>
                )
            }}
        </TabContext.Consumer>
    )
}

export const TabPanel = (props) => {
    return (
        <TabContext.Consumer>
            {(value) => value.activePanel === props.isActive ? props.children : null}
        </TabContext.Consumer>
    )
}

const TabSwitcher = (props) => {
    const [activePanel, setActivePanel] = useState("description");

    return (
        <React.Fragment>
            <TabContext.Provider value={{
                activePanel: activePanel,
                actions: {switchPanel: newPanel => {
                    setActivePanel(newPanel);
                }}
            }}>
                {props.children}
            </TabContext.Provider>
        </React.Fragment>
    )

}

export default React.memo(TabSwitcher);
import React from "react";
import TabSwitcher, {TabToggle, TabPanel} from "./tab-switcher";
import DescriptionContent from "./description-content";
import CookAndServiceComponent from "./cooking-and-serving";
import ShippingComponent from "./shipping";
import {tabsContent} from '../../utils/foundation';
const TabProductDetail = (props) => {
    
    return (
        <div className="tabs__wrapper">
            <TabSwitcher>
                <div className="tabs__selected">
                    <TabToggle id="description">
                        <span className="tab-title switch">{tabsContent.description}</span>
                    </TabToggle>
                    <TabToggle id="cooking">
                        <span className="tab-title switch">{tabsContent.cooking}</span>
                    </TabToggle>
                    <TabToggle id="shipping">
                        <span className="tab-title switch">{tabsContent.shipping}</span>
                    </TabToggle>
                </div>

                <TabPanel isActive="description">
                    <DescriptionContent title={tabsContent.description}/>
                </TabPanel>
                <TabPanel isActive="cooking">
                    <CookAndServiceComponent title={tabsContent.cooking}/>
                </TabPanel>
                <TabPanel isActive="shipping">
                    <ShippingComponent title={tabsContent.shipping}/>
                </TabPanel>
            </TabSwitcher>
        </div>
    )
}

export default React.memo(TabProductDetail);
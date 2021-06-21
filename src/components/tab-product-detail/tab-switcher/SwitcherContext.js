import React, {useContext} from "react";
import _ from "lodash";
export const TabContext = React.createContext(null);

export const useTabContext = () => {
    const context = useContext(TabContext);
    if( !_.isNil(context)) {
        throw new Error("useTabContext must be used within a <TabContext>")
    }
    return context;
}
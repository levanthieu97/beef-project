import { useEffect } from "react";
import {withRouter, useLocation} from "react-router-dom";

function ScrollToTop({history}) {
    const {pathname} = useLocation()

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0,0);
        });
        return () => {
            unlisten();
        }
    }, [pathname])
    
    return null;
}

export default withRouter(ScrollToTop);
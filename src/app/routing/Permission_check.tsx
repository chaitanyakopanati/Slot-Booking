import {Outlet} from "react-router-dom";
import Access from '../../_metronic/layout/components/aside/Accessibility' 
import ErrorPage from './ErrorPage'

const Permission_check= (props:number|string|any) => { 
    return (
        Access[props.roles][props.type]===true //here role id and permission checks using accessibilty component -GK
            ? <Outlet/>
            : <ErrorPage/> 
       
    );
}
export default Permission_check;
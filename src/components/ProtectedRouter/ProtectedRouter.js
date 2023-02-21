import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter = ({ isAllowed, children}) => {
    if(!isAllowed){
        return <Navigate to={'/authorization'} replace/>
    }
    return children ? children : <Outlet />;
};

export default ProtectedRouter;
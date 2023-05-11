import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";


const ProtectedRoute = ({children}) => {
    const { accessToken } = useSelector((state) => state.authSlice)
    if (!accessToken) {
        return <Navigate to="/" />
    }

    return children;
}

export default ProtectedRoute;
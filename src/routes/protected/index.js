import React from "react";
import {useSelector} from 'react-redux';
import { Navigate,useLocation } from "react-router-dom";

export const ProtectedRoutes = ({children})=>{
    const user = useSelector((state)=>state.user);
    let location = useLocation();

    if(!user.state.isAuthenticated){
        return <Navigate to='/login' state={{from:location}} replace/>
    }
    return children;
};

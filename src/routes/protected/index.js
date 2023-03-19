import React from "react";
import { Navigate,Outlet } from "react-router-dom";
import AddProduct from "../../screens/addproduct";
import UpdateProduct from "../../screens/updateproduct";

 const PrivateRoute= ()=>{
    const auth = null;

    return auth ? <Outlet/> : <Navigate to='/add' element={<AddProduct/>} />
}

export default PrivateRoute;

export const PrivateRoutes = (update)=>{
        const updates = update;

    return update ? <Outlet/> : <Navigate to='/update' element={<UpdateProduct/>}/>
}
import { Routes } from 'react-router-dom';
import AddProduct from '../../screens/addproduct';
import { Login } from '../../screens/login';
import Signup from '../../screens/signup';
import UpdateProduct from '../../screens/updateproduct';
import { ProtectedRoutes } from '../protected';
export function Routing(){

    return(
        <>
        <Routes>
        <ProtectedRoutes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update' element={<UpdateProduct/>}/>
        </ProtectedRoutes>
        </Routes>
        </>
    )
}
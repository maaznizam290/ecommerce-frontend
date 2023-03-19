import { Routes,Route } from 'react-router-dom';
import AddProduct from '../../screens/addproduct';
import { Login } from '../../screens/login';
import Signup from '../../screens/signup';
import PrivateRoute, { PrivateRoutes } from '../protected/index';
import UpdateProduct from '../../screens/updateproduct';
export function Routing(){

    return(
        <>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route exact path='/'  element={<PrivateRoute/>}/>
        <Route exact path='/' element={<PrivateRoutes/>}/>
        </Routes>
        </>
    )
}
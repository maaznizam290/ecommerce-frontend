import { Routes,Route } from 'react-router-dom';
import AddProduct from '../../screens/addproduct';
import { Login } from '../../screens/login';
import Signup from '../../screens/signup';
import UpdateProduct from '../../screens/updateproduct';
import Protect from '../protected';
export function Routing(){

    return(
        <>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/add'element={<Protect Cmp={AddProduct}/>}/>
        <Route path='/update' element={<Protect Cmp={UpdateProduct} />}/>
        </Routes>
        </>
    )
}


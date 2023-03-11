import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from '../components/header';
import AddProduct from '../screens/addproduct';
import { Login } from '../screens/login';
import Signup from '../screens/signup';
import UpdateProduct from '../screens/updateproduct';

export function Routing(){
    return(
        <>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update' element={<UpdateProduct/>}/>
        </Routes>
        </>
    )
}
import React, {  useState ,useContext} from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import TemplateTable from './Createtemplate';

function LoginRouter() {

    return (
    
         <BrowserRouter> 
         <Routes>
           <Route path='/' element={<Login />} />
           <Route path='/createtemplate' element={<TemplateTable/>} />
         </Routes>
        </BrowserRouter>
       
       
    )
}
export default LoginRouter
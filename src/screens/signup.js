import React, { useState ,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import Header from "../components/header";
function Signup()

{
    const Signups  = ()=>{
        localStorage.setItem('signup',true);
        navigate('/add');
    }
    useEffect(()=>{
        let signup = localStorage.getItem('signup');
        // if(signup){
        //     navigate('/add');
        // }
        // else{
        //     navig
        // }
        signup ? navigate('/add') : navigate('/signup');
       
    },[]);

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

   async function Signup(){
        let itemsObj = {name,email,password}
        console.warn(itemsObj);
      let res = await  fetch("http://localhost:8000/api/register",{
            method:"POST",
            body:JSON.stringify(itemsObj),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }            
        })
        res = await res.json();
        localStorage.setItem("user-info",JSON.stringify(res));
        navigate("/add");
    }   
    return(
        <>
    <Header/>
    <div className="col-sm-6 offset-sm-3">
    <h1>Signup Screen</h1>
    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} name="name" placeholder="name"/>
    <br />
    <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="email" />     
    <br />   
    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} name="password"  placeholder="password"/>   
    <br /> 
    <button className="btn btn-primary" onClick={Signups}>Signup</button>
    </div>
     </>
);
}

export default Signup;
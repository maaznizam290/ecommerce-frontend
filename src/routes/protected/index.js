import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";


function Protect(props){
    const {Cmp} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let signup = localStorage.getItem('signup');
        if(!signup){
            navigate('/signup');
        }
    })
    return(
        <div>
        <Cmp/>
        </div>
    )
}

export default Protect;
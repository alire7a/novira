import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Api from "./../API/Api"
import {useAuth} from "../hooks";
import { useNavigate } from 'react-router-dom';
function Login({prevRoute}) {


    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const {token,setToken} = useAuth("");
    const {isLoggedIn,setIsLoggedIn}=useAuth();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        Api.post("auth/login",{ "username": username,"password": password} ).then(res=>{
            if(res.status==200){
                navigate(`/${prevRoute}`)
                setIsLoggedIn(true);
                setToken(res.data.token)
            }
            else{
                    alert("incorrect login")
                }
        }).catch(res=>
            console.log(res.response.data)
        )
    };

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isLoggedIn ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}


export default Login;




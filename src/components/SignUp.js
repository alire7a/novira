import React, {useState} from 'react';
import Api from "../API/Api";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastname]=useState("")
    const [city,setCity]=useState("")
    const [street,setStreet]=useState("")
    const [number,setNumber]=useState("")
    const [zipcode,setZipcode]=useState("")
    const [geoLocLat,setGeoLocLat]=useState("")
    const [geoLocLong,setGeoLocLong]=useState("")
    const [phoneNumber,setPhoneNumber]=useState("")
    const navigate = useNavigate();
    const data =    {
        email:email,
        username:username,
        password:password,
        name:{
            firstname:firstName,
            lastname:lastName
        },
        address:{
            city:city,
            street:street,
            number:number,
            zipcode:zipcode,
            geolocation:{
                lat:geoLocLat,
                long:geoLocLong
            }
        },
        phone:phoneNumber
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        Api.post("users",data).then(res=> {
            console.log(res)
            if (res.status == 200){
                alert("user is Created")
                navigate("/")
            }
        })
    };
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Your Username :</label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required />
                </div>
                <div className="input-container">
                    <label>Your email Address :</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div className="input-container">
                    <label>your Password: </label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <div className="title">
                    optional:
                </div>
                <div className="input-container">
                    <label>your Firstname: </label>
                    <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}  />
                </div>
                <div className="input-container">
                    <label>your LastName: </label>
                    <input type="text" value={lastName} onChange={(e)=>setLastname(e.target.value)}  />
                </div>
                <div className="input-container">
                    <label>city: </label>
                    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}  />
                </div>
                <div className="input-container">
                    <label>street: </label>
                    <input type="text" value={street} onChange={(e)=>setStreet(e.target.value)}  />
                </div>

                <div className="input-container">
                    <label>number: </label>
                    <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}  />
                </div>
                <div className="input-container">
                    <label>zipcode: </label>
                    <input type="text" value={zipcode} onChange={(e)=>setZipcode(e.target.value)}  />
                </div>
                <div className="input-container">
                    <label>geo location Lat: </label>
                    <input type="text" value={geoLocLat} onChange={(e)=>setGeoLocLat(e.target.value)}  />
                </div>
                <div className="input-container">
                    <label>geo location Long: </label>
                    <input type="text" value={geoLocLong} onChange={(e)=>setGeoLocLong(e.target.value)}  />
                </div>
                <div className="input-container">
                    <label>phoneNumber: </label>
                    <input type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}  />
                </div>
                <div className="button-container">
                    <button type="submit" >
                        Sing Up
                    </button>
                </div>
            </form>
        </div>
    );
    return (
        <div >
            <div className="login-form">
                <div className="title">Sign Up</div>
                {renderForm}
            </div>
        </div>
    );
};

export default SignUp;
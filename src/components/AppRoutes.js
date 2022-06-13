import React, {useState} from 'react';
import Navbar from "./Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import Homepage from "./HomePage";
import UserCarts from "./UserCarts";
import CreateCard from "./CreateCard";
import Login from "./Login";
import {useAuth} from "../hooks";
import SignUp from "./SignUp";
import FaveCards from "./FaveCards";

const AppRoutes = () => {
    const {isLoggedIn,setIsLoggedIn}=useAuth()
    const [prevRoute,setPrevRoute]=useState();

    function RequireAuth({ children }) {
        setPrevRoute(children.type.name)
        return isLoggedIn === true ? children :
            <>
                <Navigate to="/login" replace />
            </>
        ;
    }
    return (
        <div>
            {

                    <>
                        <Navbar />
                        <Routes>
                            <Route exact path="/" element={<Homepage/>} />
                            <Route path="UserCarts" element={<RequireAuth><UserCarts/></RequireAuth>} />
                            <Route path="CreateCard" element={<RequireAuth><CreateCard/></RequireAuth>} />
                            <Route path="faveCards" element={<RequireAuth><FaveCards/></RequireAuth>} />
                            <Route path="login" element={  <Login prevRoute={prevRoute}/>} />
                            <Route path="Register" element={  <SignUp/>} />
                        </Routes>
                    </>


            }
        </div>
    );
};

export default AppRoutes;
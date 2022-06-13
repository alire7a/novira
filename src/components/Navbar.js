import React from 'react';
import {NavLink} from "react-router-dom";
import {useAuth} from "../hooks";

const Navbar = () => {
const {isLoggedIn, setIsLoggedIn} =useAuth(true);
const {token, setToken} =useAuth(true);
    return (

                    <nav
                        style={{
                            borderBottom: "solid 1px",
                            padding: "1rem",
                            display:"flex",
                            justifyContent:"center"
                        }}
                    >
                        <NavLink
                            style={({ isActive }) => ({
                                margin: "1rem 1rem",
                                textDecoration:"none",
                                color: isActive ? "blue" : "black",
                                fontWeight: isActive ? "700" : "400",
                            })}
                            to={"/"}
                            key={"Homepage"}>
                            Homepage
                        </NavLink>
                        <NavLink
                            style={({ isActive }) => ({
                                margin: "1rem 1rem",
                                textDecoration:"none",
                                color: isActive ? "blue" : "black",
                                fontWeight: isActive ? "700" : "400",
                            })}
                            to={"CreateCard"}
                            key={"CreateCard"}
                        >
                           CreateCard
                        </NavLink>

                        <NavLink
                            style={({ isActive }) => ({
                                margin: "1rem 1rem",
                                textDecoration:"none",
                                color: isActive ? "blue" : "black",
                                fontWeight: isActive ? "700" : "400",
                            })}
                            to={"/userCarts"}
                            key={"userCarts"}>
                            My Carts
                        </NavLink>
                        <NavLink
                            style={({ isActive }) => ({
                                margin: "1rem 1rem",
                                textDecoration:"none",
                                color: isActive ? "blue" : "black",
                                fontWeight: isActive ? "700" : "400",
                            })}
                            to={"faveCards"}
                            key={"faveCards"}
                        >
                            Fave Cards
                        </NavLink>
                        {!isLoggedIn &&
                       <>
                           <NavLink
                               style={({ isActive }) => ({
                                   margin: "1rem 1rem",
                                   textDecoration:"none",
                                   color: isActive ? "blue" : "black",
                                   fontWeight: isActive ? "700" : "400",
                               })}
                               to={"/login"}
                               key={"login"}>
                               logIn
                           </NavLink>
                           <NavLink
                               style={({ isActive }) => ({
                                   margin: "1rem 1rem",
                                   textDecoration:"none",
                                   color: isActive ? "blue" : "black",
                                   fontWeight: isActive ? "700" : "400",
                               })}
                               to={"/register"}
                               key={"register"}>
                               SignUP
                           </NavLink>

                       </>
                        }

                        {isLoggedIn &&
                            <button onClick={()=> {
                                setIsLoggedIn(false)
                                setToken("")
                            } }>
                                logout
                            </button>
                        }

            </nav>
    );
};

export default Navbar;
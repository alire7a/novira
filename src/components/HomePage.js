import {React, useEffect, useState} from 'react';
import Product from "./Product";
import Api from "./../API/Api"
import {useAuth} from "../hooks";

const Homepage = () => {
    const [data,setData] = useState()
    const {token ,setToken} = useAuth();
    useEffect(()=>{
        Api.get("/products").then(res=>setData(res.data))
    },[])

    return (
        <div>
            token:  {token}
            {
                data?.map(product=>{
                    return(
                        <Product id={product.id} title={product.title} desc={product.description} category={product.category} price={product.price} img={product.image} />
                    )
                })
            }
        </div>
    );
};

export default Homepage;
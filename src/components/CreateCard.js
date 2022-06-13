import React, {useState} from 'react';
import Api from "../API/Api";
import {useNavigate} from "react-router-dom";

const CreateCard = () => {
    const [productId,setProductId]=useState();
    const [quantity,setQuantity]=useState();

    const navigate = useNavigate();
    const d = new Date();
    const handleSubmit = (event) => {
        event.preventDefault();
        const date = d.getFullYear()+"-"+d.getDay()+"-"+d.getMonth();
        Api.post("carts", {
            userId:1,
            date:date,
            products:[{productId:productId,quantity:quantity}]
        } ).then(res=>{
            if (res.status ==200){
                console.log(res)
                alert("card is added")
                navigate("/userCarts")
            }
        }).catch(err=>{
            alert(err)
        })
    };

    return (
        <div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>products id </label>
                        <input type="text" value={productId} onChange={(e)=>{setProductId(e.target.value)}}/>
                    </div>

                    <div className="input-container">
                        <label>quantity </label>
                        <input type="text" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
                    </div>

                    <div className="button-container">
                        <button type="submit" >
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCard;
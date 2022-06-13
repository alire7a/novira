import React, {useEffect, useState} from 'react';
import {useAuth} from "../hooks";
import Api from "../API/Api";
import Card from "./Card";

const UserCarts = () => {
    const {token ,setToken} = useAuth();
    const {faves}=useAuth()
    const [cards,setCards]=useState();
    const userId = 1;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    useEffect(()=>{
        Api.get(`carts/user/${userId}`,config).then(res=>{
            setCards(res.data)
        })
    },[])

    return (
        <div >
            <div className={"cards-section"}>
                {
                    cards?.map(card=>{
                        return(
                            <Card key={card.date} products={card.products} id={card.id} />
                        )
                    })
                }
            </div>

        </div>
    );
};

export default UserCarts;
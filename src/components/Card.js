import React, {useEffect} from 'react';
import Api from "../API/Api";
import {useAuth} from "../hooks";

const Card = ({products,id}) => {
    const {faves,setFaves}=useAuth([]);
    return (
        <div className={"card"}>
            <div>
                <div>
                    card id : {id}
                </div>
                <div>
                    products id:
                </div>
                <div className={"id"}>
                    {products?.map(product=>{
                        return(
                            <div>
                                {product.productId}
                            </div>
                        )
                    })}
                </div>
                <div>
                    products quantity:
                </div>
                <div className={"id"}>
                    {products?.map(product=>{
                        return(
                            <div>
                                {product.quantity}
                            </div>
                        )
                    })}
                </div>

                {!faves.includes(id) ?
                <button onClick={() => {
                    if (!faves.includes(id)) {
                        setFaves([...faves, id])
                    }
                }}>
                    add To faves
                </button>:
                    <button onClick={() => {
                            setFaves((faves)=>
                               faves.filter((i) => i != id)
                            )
                    }}>
                    remove From Faves
                    </button>
                }
            </div>
        </div>
    );
};

export default Card;
import React from 'react';

const Product = ({title,desc,img,price,id,category}) => {
    return (
        <div className={"product"}>
            <div className="text">
                <div className="title">
                    {title}
                </div>
                <div className="desc">{desc}</div>
            </div>
            <div className="img">
                <img src={img} alt=""/>
            </div>

        </div>
    );
};

export default Product;
import React from 'react'
import '../css/Product.css';

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <strong>{price}</strong>
                <small>vnd</small>
            </p>
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_)=> (
                        <p>:star:</p>
                    ))}
            </div>
            <img className="product__" src={image} alt="product"/>
        </div>
    )
}

export default Product

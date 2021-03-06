import React from 'react'
import '../css/Product.css';

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>{price}</strong>
                    <small>vnd</small>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_)=> (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="product"/>
            <button>Add to basket</button>
        </div>
    )
}

export default Product

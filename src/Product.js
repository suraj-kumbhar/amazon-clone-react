import React from 'react';
import './Product.css';

function Product({ id, title, price, rating, image }) {
    return (
        <div className="product">
            <div class="product__info">
                <p>{title}</p>
                <p class="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div class="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            <img src={image} alt="" />
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;

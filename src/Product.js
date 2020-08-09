import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

function Product({ id, title, price, rating, image }) {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                title,
                image,
                price,
                rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <strong>{value}</strong>
                            </>
                        )}
                        decimalScale={2}
                        value={price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₹'}
                    />
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;

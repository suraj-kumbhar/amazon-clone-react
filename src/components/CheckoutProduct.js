import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
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
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((key, value) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

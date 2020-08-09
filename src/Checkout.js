import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ cart }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                    class="checkout__ad"
                />
                {cart?.length === 0 ? (
                    <div>
                        <h2 className="checkout__title">
                            Your Shopping Cart is Empty
                        </h2>
                        <p className="checkout__subtitle">
                            You have no item in your Cart. To buy one or more
                            items, click "Add to Cart" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Cart</h2>
                        {cart.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </div>
                )}
            </div>
            {cart.length > 0 && (
                <div class="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;

import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART/GW/Hero/ShopNow/fst/rec/DesktopHero_1.1x._CB408378457_.jpg"
                alt="not available"
            />
            <div className="home__row">
                <Product
                    id="111111111111111"
                    title="Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey"
                    price={224900.0}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SX679_.jpg"
                />
                <Product
                    id="2222222222222222"
                    title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
                    price={54999.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61LHGUJT9xL._SX425_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="333333333"
                    title="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION) Hardcover – 1 December 2019"
                    price={399.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._SX322_BO1,204,203,200_.jpg"
                />
                <Product
                    id="44444444"
                    title="Lenovo Legion Y740 Intel Core i7 9th Gen 15.6 inch FHD Gaming Laptop (16GB/1TB SSD/Windows/Office/NVIDIA RTX 2070 8GB Graphics/Black/2.2Kg), 81UH00BQIN"
                    price={152990}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71bKbg0Df4L._SL1500_.jpg"
                />
                <Product
                    id="555555555555"
                    title="Grave Before Shave Beard Oil 4 Pack"
                    price={6590}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/712fBmxVCZL._SX679_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="6666666"
                    title="Dell UltraSharp 49 Curved Monitor: U4919DW"
                    price={219689.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81ZXKUvoyuL._SL1500_.jpg"
                />
            </div>
        </div>
    );
}

export default Home;

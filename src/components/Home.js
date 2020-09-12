import React from 'react';
import './Home.css';
import Product from './Product';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Home() {
  const properties = {
    duration: 3000,
    transitionDuration: 1000,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
  };

  const Slideshow = () => {
    return (
      <div className="home__slideshow">
        <Slide {...properties}>
          {slideImages.map((each, index) => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={each} key={index} className="home__slideshowImage" />
          ))}
        </Slide>
      </div>
    );
  };

  const slideImages = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART/GW/Hero/ShopNow/fst/rec/DesktopHero_1.1x._CB408378457_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_ft_bolly._CB405290232_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/Herotator/WFH/Offer/V2/WFH-Herotator-hero_1500x600._CB405299564_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-JULY/1x_Echo_Dot._CB428276184_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Watches/GW/Sept/GW_PC_BUNK_watches1500x600._CB405302957_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/MonsterSeries/V203057508_SamsungM_M21_M31_GW_tall_hero_1500x600._CB410822764_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/HDFC_GWBanner/P38983965_IN_WLME_SamsungGalaxy_M51_With_Bank_PC_Preview_3.2._CB405303135_.jpg',
  ];

  return (
    <div className="home">
      {Slideshow()}
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

import React from 'react';
import './NavBar.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar__navigation">
        <Link className="navBar__delToLink">
          <div className="navBar__delTo">
            <div className="navBar__icon">
              <LocationOnIcon />
            </div>
            <div className="navBar__delTo__text">
              <div className="navBar__delTo__textUser">Deliver to Suraj</div>
              <div className="navBar__delTo__textAdd">Ankleshwar 393001</div>
            </div>
          </div>
        </Link>
        <div className="navBar__categories">
          <Link className="navBar__category">
            <div>Prime</div>
          </Link>
          <Link className="navBar__category">
            <div>Best Seller</div>
          </Link>
          <Link className="navBar__category">
            <div>Mobiles</div>
          </Link>
          <Link className="navBar__category">
            <div>Fashion</div>
          </Link>
          <Link className="navBar__category">
            <div>Suraj's Amazon.in</div>
          </Link>
          <Link className="navBar__category">
            <div>Electronics</div>
          </Link>
          <Link className="navBar__category">
            <div>Amazon Pay</div>
          </Link>
          <Link className="navBar__category">
            <div>Today's Deals</div>
          </Link>
          <Link className="navBar__category">
            <div>Customer Service</div>
          </Link>
        </div>
      </div>
      <img
        className="navBar__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/June/gaming-swm._CB430661085_.jpg"
        alt=""
      />
    </div>
  );
}

export default NavBar;

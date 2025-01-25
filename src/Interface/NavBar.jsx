import React, { useEffect, useState } from 'react';
import icon from '../Images/icon.png';
import image14 from '../Images/image14.jpg';
import Offer from '../Images/Offer.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';


const Navigation = ({ cart, GetFromChild, Price }) => {
  const [DisplayPopup, setDisplayPoup] = useState(false);
  const [OffersPopup, setOffersPopup] = useState(false);

  const DisplayOffers = () => {
    setOffersPopup(false);
  };

  const CaptureType = (e) => {
    const trimedval=e.target.value.trim()
    if(trimedval==''){
      return
    }else{

      GetFromChild(trimedval);
    }
    console.log(e.target.value);
  };

  const CapturePrice = (e) => {
    Price(e.target.value);
  };

  useEffect(() => {
    const storages = sessionStorage.getItem('Render-page');
    if (storages === null) {
      sessionStorage.setItem('Render-page', true);
      setDisplayPoup(true);
      setTimeout(() => {
        setOffersPopup(true);
      }, 1500);
    }
  }, []);
  const RemovePoups = () => {
    setDisplayPoup(false);
  };

  return (
    <div>
      <nav className="navbar bg-dark navbar-dark navbar-expand-lg sticky-top z-index-5">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={icon}
              className="nav-image bg-dark rounded-5 me-2"
              width="45"
              height="35"
              alt="Walk Aura"
            />
            <span className="fs-4">WalkAura</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item me-2">
                <input
                  type="search"
                  list="shoe"
                  className="form-control"
                  placeholder="Search Collections"
                  onChange={CaptureType}
                />
                <datalist id="shoe">
                  <option value="Puma" />
                  <option value="Adidas" />
                  <option value="Nike" />
                  <option value="Skechers" />
                </datalist>
              </li>
              <li className="nav-item">
                <button className="btn text-white">
                  Search <span className="bi bi-search"></span>
                </button>
              </li>
              <li className="nav-item">
                <select
                  name="selection"
                  onChange={CapturePrice}
                  className="form-select text-white bg-dark border-0"
                >
                  <option value="Hign-to-Low">High-to-Low</option>
                  <option value="Low-to-High">Low-to-High</option>
                </select>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-warning text-white mt-2 ms-1" to="/Offers">
                  Exclusive Offers <span className="bi bi-star-fill text-warning"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn text-white" to="/MyOrders">
                  My Orders <span className="bi bi-gift-fill"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn text-white" to="/LoginPage">
                  Log in <span className="bi bi-person-fill"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-dark text-white" to="/Cart">
                  Cart <span className="bi bi-cart-check-fill"></span> {cart}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {DisplayPopup && (
        <div
          className="container-fluid d-flex align-items-center justify-content-center position-fixed"
          style={{
            height: '100vh',
            width: '100%',
            top: '0',
            left: '0',
            zIndex: '1050',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            className="card bg-light p-3"
            style={{ width: '90%', maxWidth: '650px', height: 'fit-content' }}
          >
            <div className="row g-3">
              <div className="col-md-6 d-flex align-items-center">
                <img
                  src={image14}
                  alt="Shoes Mega Offers"
                  className="rounded card-img-top img-fluid"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-close float-end"
                  onClick={RemovePoups}
                ></button>
                <div className="card-title fs-4 fw-bold mt-3">
                  Special Launch Offer!
                </div>
                <div className="card-text mt-2">
                  Enjoy 20% OFF on your first purchase! Handpicked styles you
                  won't find elsewhere. Sign in or create an account to avail of
                  this offer.
                </div>
                <Link to="/LoginPage">
                  <button className="btn btn-outline-dark mt-3">
                    Sign Up Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {OffersPopup && (
        <section
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1050,
          }}
        >
          <section
            className="p-3 rounded position-relative"
            style={{ maxWidth: '400px', width: '90%' }}
          >
            <button
              className="btn-close position-absolute top-0 end-0 m-2 bg-white"
              onClick={DisplayOffers}
            ></button>
            <img
              src={Offer}
              className="img-fluid rounded"
              alt="Offer"
              style={{ width: '100%', height: 'auto' }}
            />
            <section className="mt-3 text-center">
              <Link to="/Offers" className="text-decoration-none">
                <button className="btn btn-warning p-2">
                  Click to Blast the Offers
                </button>
              </Link>
            </section>
          </section>
        </section>
      )}
    </div>
  );
};

export default Navigation;

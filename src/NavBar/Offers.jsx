import React from 'react';
import Poster from '../Images/Poster.png';
import ComboOffers from '../Images/ComboOffers.jpg';
import { Link } from 'react-router-dom';
import NavBar from '../Interface/NavBar.jsx'
const Offers = ({cart}) => {
  return (
    <div>
      <NavBar cart={cart} />
      <div className="container-fluid p-5 bg-dark" style={{ minHeight: '100vh' }}>
        <div className="row mb-4">
          <div className="col-12 text-white shadow d-flex flex-column flex-lg-row gap-4 p-3 align-items-center justify-content-center">
            <img src={ComboOffers} alt="Shoe images" width='300' height='300' className="img-fluid rounded"/>
            <section className="text-center text-lg-start">
              <p className="fs-3 fs-lg-4">Unbelievable Combo Offer! 🎉</p>
              <p className="fs-5 fs-lg-3">10 Branded Sneakers for Just 5000 Rupees!</p>
              <p className="fs-6 fs-lg-4">Mega Sale Alert! ✨</p>
              <b className="fs-6 fs-lg-5">Step Up Your Style with the Best Brands!</b>
              <ul className="mt-2 fs-6 fs-lg-5 text-start">
                <li>Get 10 pairs of branded sneakers for an unbeatable price of just 5000 rupees!</li>
                <li>Top brands including Nike, Adidas, Puma, and more!</li>
                <li>Perfect for sneaker enthusiasts and trendsetters.</li>
              </ul>
              <p className="fs-6 fs-lg-5">📢 Why Wait? Grab Your Favorite Styles Now!</p>
              <b className="fs-6 fs-lg-5">Limited Time Offer! Don’t Miss Out! 🚀</b>
              <b>
                Shop at <a href="#">WalkAura.com</a> and Elevate Your Footwear Game!
              </b>
              <br />
              <Link to="/" className="text-decoration-none">
                <button className="btn btn-warning fs-6 fs-lg-5 px-4 py-2 mt-4">
                  Purchase <span className="bi bi-cart fs-5"></span>
                </button>
              </Link>
            </section>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 text-white shadow d-flex flex-column flex-lg-row gap-4 align-items-center">
            <section className="text-center text-lg-start">
              <h2 className="fs-4 fs-lg-2">
                The Space Between You and Your Dreams? Just a Step
              </h2>
              <br />
              <p className="fs-6 fs-lg-5">
                Why walk when you can soar? WalkAura shoes are designed to make you feel weightless, like you’re running among the stars. Experience shoes that combine cutting-edge technology with celestial inspiration. WalkAura lets you conquer the Earth and dream of the stars.
              </p>
              <p className="fs-6 fs-lg-3">💥 Exclusive discounts available – take the first step today!</p>
              <p className="fs-6 fs-lg-3">🚀 Limited-time offers are in orbit – grab them now!</p>
              <Link to="/" className="text-decoration-none">
                <button className="shadow btn btn-warning fs-6 fs-lg-5 px-4 py-2 d-flex align-items-center justify-content-center">
                  Step Into the Future <span className="ms-2 bi bi-rocket fw-bold fs-4"></span>
                </button>
              </Link>
            </section>
            <img src={Poster} alt="Poster" className="img-fluid rounded" style={{ maxWidth: '400px', height: 'auto' }} />
          </div>
        </div>

        <div className="row text-white shadow mt-3 pt-3">
          <footer className="text-center text-lg-start">
            <p className="fs-5 fs-lg-4">Contact Us</p>
            <p>
              We value your feedback and inquiries! If you have any questions, suggestions, or need assistance with AuraWalk, feel free to reach out to us.
            </p>
            <p className="fs-6 fs-lg-4">Contact Details:</p>
            <ul type="none" className="fs-6">
              <li>Email: <a href="#">support@aurawalk.com</a></li>
              <li>Phone: +91 7200877947</li>
              <li>Business Hours: Monday - Friday, 9:00 AM - 5:00 PM (GMT)</li>
            </ul>
            <p>Alternatively, you can fill out our Contact Form, and our team will get back to you as soon as possible.</p>
            <p className="fs-6 fs-lg-4">Copyright Notice</p>
            <p className="border rounded p-2" style={{ width: 'fit-content' }}>
              © 2025 AuraWalk. All rights reserved.
            </p>
            <p>
              AuraWalk, its logo, and associated content are the intellectual property of AuraWalk. Unauthorized reproduction, distribution, or usage of our materials, including but not limited to text, images, designs, and code, is strictly prohibited without prior written consent.
              <br />
              <span className="fs-6 fs-lg-5">Terms of Use:</span> By using AuraWalk, you agree to our Terms and Conditions and Privacy Policy.
              <br />
              <span className="fs-6 fs-lg-5">Trademarks:</span> Any third-party trademarks, logos, or brand names mentioned on AuraWalk belong to their respective owners. AuraWalk does not claim ownership over these trademarks.
              <br />
              For copyright-related inquiries, <br />
              Contact: <a href="#">legal@aurawalk.com</a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Offers;

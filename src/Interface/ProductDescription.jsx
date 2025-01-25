import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from './NavBar.jsx';
const ProductDescription = ({ cart, Navigating }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state;
  function ToBuy(product) {
    navigate('/BuyPage', { state: { product } });
  }
  return (
    <div>
      <NavBar cart={cart} />
      <div className="container-fluid bg-dark min-vh-100 d-flex flex-column align-items-center">
        <h4 className="text-dark text-center py-2 bg-white w-100">
          Product Details
        </h4>
        {product && (
          <div
            className="card shadow d-flex flex-column flex-lg-row align-items-center align-items-lg-start p-3 mt-4"
            style={{ maxWidth: '90%', width: '640px' }}
          >
            <div className="col-12 col-lg-6 text-center mb-3 mb-lg-0">
              <img
                src={product.images}
                alt="Shoe Image"
                className="img-fluid"
                style={{ maxHeight: '300px', objectFit: 'contain' }}
              />
            </div>

            <div className="col-12 col-lg-6">
              <p>
                <strong>Name:</strong> {product.name}
              </p>
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Price:</strong> {product.price}
              </p>
              <p>
                <strong>Size:</strong> {product.size.join(' / ')}
              </p>
              <p>
                <strong>Ratings:</strong> {product.ratings}
                <i className="bi bi-star-fill" />
              </p>
              <p>
                <strong>Description:</strong> {product.description}
              </p>
              <p>
                <strong>Review:</strong> {product.review}
              </p>

              
              <div className="d-flex flex-column flex-md-row gap-2 justify-content-center mt-3">
                <button
                  className="btn btn-outline-dark w-100 w-md-auto"
                  onClick={() => Navigating(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="btn btn-outline-dark w-100 w-md-auto"
                  onClick={() => ToBuy(product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;

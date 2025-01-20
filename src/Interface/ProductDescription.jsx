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
      <div className="container-fluid bg-dark">
        <div className="row d-flex justify-content-center " style={{ height: '100vh' }}>
          <h4 className="text-dark text-center p-1 bg-white align-center" style={{height:'fit-content'}}>Product Details</h4>
          {product && (
            <div className="card shadow d-flex flex-row position-relative " style={{ width: '640px',top:'-50px',height:'fit-content' }}>
              <div className="col-6">
                <img src={product.images} alt="Shoe Image" className="img-responsive p-3" width='300' style={{height:'fit-content'}}/>
              </div>
              <div className="col-6 mt-3">
                <p><strong>Name:</strong> {product.name}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Size:</strong> {product.size.join(' / ')}</p>
                <p><strong>Ratings:</strong> {product.ratings} <i className="bi bi-star-fill" /></p>
                <p><strong>Description:</strong> {product.description}</p>
                <p><strong>Review:</strong> {product.review}</p>
                <div className="d-flex gap-2 justify-content-center mt-3 mb-2">
                  <button className="btn btn-outline-dark" onClick={() => Navigating(product)}>Add to Cart</button>
                  <button className="btn btn-outline-dark" onClick={() => ToBuy(product)}>Buy Now</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

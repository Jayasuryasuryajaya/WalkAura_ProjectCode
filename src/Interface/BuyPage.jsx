import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavBar from './NavBar.jsx';

const BuyPage = ({ cart }) => {
  const location = useLocation();
  const [Selected, setSelected] = useState('');
  const [SizeErr, setSizeErr] = useState('');
  const [Loader, setLoader] = useState(false);
  const { cartDatas, selectedSize, product } = location.state || {};
  const [prodCount, setProdCount] = useState(1);
  const data = cartDatas || product;
  const sizes = selectedSize || Selected;
  const Count = prodCount;
  const Increment = () => setProdCount((prev) => prev + 1);
  const Decrement = () => setProdCount((prev) => (prev > 1 ? prev - 1 : prev));

  const AddtoMyOrders = async () => {
    if (!Selected && !selectedSize) {
      setSizeErr('Please select a size before proceeding.');
      return;
    }
    setSizeErr('');
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      toast.success('Order placed successfully!', { position: 'top-center' });
    }, 2000);
  };

  return (
    <div className="container-fluid bg-dark text-white p-0">
      <NavBar cart={cart} />
      <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      
        {Loader && (
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}
          >
            <span className="fw-bold fs-3 text-white mb-3">Placing Your Orders!</span>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
       
        {data && (
          <div className="card shadow-lg bg-light text-dark p-4 col-11 col-md-8 col-lg-6">
            <h4 className="text-start fs-4 mb-4">Order Confirmation</h4>
            <div className="row g-4">
              
              <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                <img
                  src={data.images}
                  alt="Product"
                  className="img-fluid rounded"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </div>
              
              <div className="col-lg-6 col-md-6 col-sm-12">
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Brand:</strong> {data.brand}</p>
                <p><strong>Price:</strong> {data.price}</p>
                <p>
                  <strong>Size:</strong>
                  {selectedSize ? (
                    <span className="ms-2">{selectedSize} - Selected Size</span>
                  ) : (
                    data.size.map((size, index) => (
                      <button
                        key={index}
                        className={`btn btn-outline-dark ms-1 mb-2 ${size === Selected ? 'bg-dark text-white' : ''}`}
                        onClick={() => setSelected(size)}
                      >
                        {size}
                      </button>
                    ))
                  )}
                </p>
                {SizeErr && <span className="text-danger d-block mb-2">{SizeErr}</span>}
                <div className="d-flex align-items-center mt-2">
                  <p>
                    <strong>Product Count:</strong>
                    <button className="btn btn-outline-dark ms-3" onClick={Decrement}>-</button>
                    <span className="mx-2">{Count}</span>
                    <button className="btn btn-outline-dark" onClick={Increment}>+</button>
                  </p>
                </div>
                <p><strong>Ratings:</strong> {data.ratings} <i className="bi bi-star-fill" /></p>
                <p><strong>Description:</strong> {data.description}</p>
                <div className="text-center">
                  <button className="btn btn-dark w-100" onClick={AddtoMyOrders}>
                    Continue Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyPage;

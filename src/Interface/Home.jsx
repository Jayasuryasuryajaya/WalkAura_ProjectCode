import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './InterfaceCSS/Home.css'
const Home = ({ cart, Navigating }) => {
  const navigate = useNavigate();
  const [SelectShoeType, setSelectShoeType] = useState('products'); 
  const [ArrayFormate, setArrayFormate] = useState([]);
  const [SelectPrice, setSelectPrice] = useState('');

  const GetFromChild = (data) => {
    setSelectShoeType(data);
  };

  const Price = (price) => {
    setSelectPrice(price);
  };

  const sortProducts = (products, sortType) => {
    if (sortType === 'High-to-Low') {
      return products.sort((a, b) => b.price - a.price);
    } else if (sortType === 'Low-to-High') {
      return products.sort((a, b) => a.price - b.price);
    }
    return products;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fast-silver-cow.glitch.me/First.json');
                const sortedData = sortProducts(response.data[SelectShoeType], SelectPrice);
        setArrayFormate(sortedData);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchData();
  }, [SelectShoeType, SelectPrice]);
  const Verification = (product) => {
    navigate('/ProductDescription', { state: { product } });
  };

  return (
    <div>
      <NavBar cart={cart} GetFromChild={GetFromChild} Price={Price} />
      <div className="container-fluid bg-dark py-4">
        <div className="row mobileviews justify-content-center">
          {ArrayFormate.map((product, index) => (
            <div
              key={index}
              className="tagueh col-12 col-md-5 col-lg-4 card m-3 p-3 p-sm-2  d-flex rounded-1 flex-row align-items-center"
              style={{
                fontSize: '15px',
                cursor: 'pointer',
                width: '530px',
              }}
            >
              <img
                className="img-fluid rounded"
                src={product.images}
                alt={product.name}
                height="200"
                width="150"
              />
              <div className="contents ms-4">
                <p><strong>Name:</strong> {product.name}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Price:</strong> ₹{product.price}</p>
                <p><strong>Size:</strong> {product.size.toString().split('/')} - Sizes are In Stock</p>
                <p>
                  <strong>Ratings:</strong> {product.ratings} <i className="bi bi-star-fill"></i>
                </p>
                <div className="buttonuh d-flex gap-2">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      Navigating(product);
                    }}
                    style={{ width: 'fit-content' }}
                  >
                    Add to Cart <span className="bi bi-cart-check-fill"></span>
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      Verification(product);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavBar from './NavBar.jsx';

const BuyPage = ({ cart }) => {
  const location = useLocation();
  const [Selected, setSelected] = useState('');
  const [SizeErr, setSizeErr] = useState('');
  const [Loader, setLoader] = useState(false);
  const [AlreadyOrdered, setAlreadyOrdered] = useState([]);
  const [CustomerInfos, setCustomerInfos] = useState('');
  const [CreateUserDatas, setCreateUserDatas] = useState('');
  const { cartDatas, selectedSize, product } = location.state || {};
  const [prodCount, setProdCount] = useState(1);
  const data = cartDatas || product;
  const sizes = selectedSize || Selected;
  const Count = prodCount;
  const navigate = useNavigate();
  // useEffect(() => {
  //   const getDataOrders = async () => {
  //     try {
  //       const { data: responseData } = await axios.get('https://fast-silver-cow.glitch.me/First.json');
  //       setAlreadyOrdered(responseData.Carts || []);
  //     } catch (err) {
  //       console.error('Error fetching orders:', err);
  //     }
  //   };
  //   getDataOrders();
  // }, []);
  // useEffect(() => {
  //   const getAddressVerify = async () => {
  //     try {
  //       const { data: customerData } = await axios.get('https://fast-silver-cow.glitch.me/First.json');
  //       setCustomerInfos(customerData[0]?.number?.toString());

  //       const { data: userData } = await axios.get('https://fast-silver-cow.glitch.me/First.json');
  //       setCreateUserDatas(userData[0]?.number);
  //     } catch (err) {
  //       console.error('Error verifying address:', err);
  //       setCreateUserDatas(undefined);
  //     }
  //   };
  //   getAddressVerify();
  // }, []);

  const Increment = () => setProdCount((prev) => prev + 1);
  const Decrement = () => setProdCount((prev) => (prev > 1 ? prev - 1 : prev));

  const AddtoMyOrders = async () => {
    toast.success('Order placed successfully!')
  //   if (!AlreadyOrdered.some((order) => order.id === data.id)) {
  //     if (sizes) {
  //       const updatedData = { ...data, size: sizes, Item: Count };
  //       const orderData = [updatedData];
    //     try {
    //       setLoader(true);
    //       await axios.post('https://fast-silver-cow.glitch.me/First.json', {
    //         Carts: [...AlreadyOrdered, ...orderData],
    //       }, {
    //         headers: { 'Content-Type': 'application/json' },
    //       });
    //       setSizeErr('');
    //       if (CustomerInfos && CreateUserDatas && CustomerInfos === CreateUserDatas) {
    //         setTimeout(() => {
    //           setLoader(false);
    //           navigate('/MyOrders');
    //         }, 3000);
    //       } else {
    //         navigate('/CustomerInfos');
    //       }
    //     } catch (err) {
    //       console.error('Error placing order:', err);
    //       setLoader(false);
    //     }
    //   } else {
    //     setSizeErr('Select Your size.');
    //   }
    // } else {
    //   toast.warning('The product is already ordered!');
    // }
  // };
  }

  return (
    <div className="container-fluid bg-dark text-white">
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
          <div className="card shadow-lg bg-light text-dark p-3" style={{ width: '70%' }}>
            <h4 className="text-start fs-4">Order Confirmation</h4>
            <div className="row g-4">
              <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                <img src={data.images} alt="Product" width='300' height='400' className="img-fluid rounded" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Brand:</strong> {data.brand}</p>
                <p><strong>Total Price:</strong> {data.price}</p>
                <p>
                  <strong>Size:</strong>
                  {selectedSize ? (
                    <span className="ms-2">{selectedSize} - Selected Size</span>
                  ) : (
                    data.size.map((size, index) => (
                      <button
                        key={index}
                        className={`btn btn-outline-dark ms-1 ${size === Selected ? 'bg-dark text-white' : ''}`}
                        onClick={() => setSelected(size)}
                      >
                        {size}
                      </button>
                    ))
                  )}
                </p>
                <span className="text-danger">{SizeErr}</span>
                <div className="d-flex align-items-center mt-2">
                  <p>
                    <strong>Product Count:</strong>
                    <button className="btn btn-outline-dark ms-3" onClick={Decrement}>-</button>
                    <span className="ms-2 me-2">{Count}</span>
                    <button className="btn btn-outline-dark" onClick={Increment}>+</button>
                  </p>
                </div>
                <p><strong>Ratings:</strong> {data.ratings} <i className="bi bi-star-fill" /></p>
                <p><strong>Description:</strong> {data.description}</p>
                <div className="text-center">
                  <button className="btn btn-dark mb-3" onClick={AddtoMyOrders}>Continue Order</button>
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

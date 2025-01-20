import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Interface/InterfaceCSS/MyOrder.css';
import NavBar from '../Interface/NavBar.jsx'
const MyOrders = ({cart}) => {
  const [Orders, setOrders] = useState([]);
  const [HandleCancle, setHandleCancel] = useState([]);

  useEffect(() => {
    const GetMyOrders = async () => {
      try {
        const MyOrders = await axios.get('http://localhost:3500/MyOrders');
        setOrders(MyOrders.data);
        setHandleCancel(MyOrders.data.map(() => true));
      } catch (err) {
        console.log(err);
      }
    };
    GetMyOrders();
  }, []);

  const CalcelOrder = (id) => {
    try{
      axios.delete(`http://localhost:3500/MyOrders/${id}`)
      const getFilterData=Orders.filter((curr)=>{curr.id !== id})
      setHandleCancel((prevState) =>
        prevState.map((_,i) => ( Orders[i].id !== id)))
      Orders(getFilterData)
    }catch(err){
      console.log(err)
    }
    console.log(HandleCancle)
   
    console.log()
  };

  return (
    <>
      <NavBar cart={cart}/>
    <div className="container-fluid bg-dark p-2 align-items-center" style={{ minHeight: '100vh' }}>
      {Orders.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center text-white">
          <span className="fw-bold fs-3">No Products in Your Order!</span>
        </div>
      ) : (
        <div className="row">
          <h4 className="text-white pt-3">Orders</h4>
          <div className="col-12 card d-flex flex-wrap mx-auto" style={{ height: 'fit-content',width:'95%' }}>
            {Orders.map((val, i) => {
              const product = val['0'];
              return (
                <div className="d-flex flex-column flex-md-row p-2 align-items-center" key={i}>
                  <div className="image col-12 col-md-5 text-center">
                    <img
                      width="250"
                      height="350"
                      src={product.images}
                      alt={product.name}
                      className="img-responsive rounded m-3"
                    />
                  </div>
                  <div className="contents col-12 col-md-8">
                    <p>Name: {product.name}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Size: {product.size}</p>
                    <p>Product Count: {product.Item}</p>
                    <p>Price: {product.price}</p>
                    <p>Reviews: {product.review}</p>
                    <p className="fw-bold p-1">
                      Your Order placed successfully!
                      <br />
                      Expected delivery date 4<sup>th</sup> Jan. Any queries{' '}
                      <a href="">Contact us</a>
                    </p>
                    <div className="d-flex flex-column flex-md-row gap-2">
                      <button
                        className="btn btn-warning"
                        disabled={!HandleCancle[i]}
                        onClick={() => CalcelOrder(val.id)}
                      >
                        {HandleCancle[i] ? 'Cancel Order' : 'Order Cancelled'}
                      </button>
                      <button className="btn btn-dark d-flex align-items-center justify-content-center">
                        Track Your Orders <span className="bi bi-x fw-bold fs-4"></span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default MyOrders;

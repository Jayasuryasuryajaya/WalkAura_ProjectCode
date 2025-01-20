import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Interface/NavBar.jsx';

import axios from 'axios';
const Cart = ({cart}) => {
  const navigate = useNavigate()
  const [CartData,setCartData]=useState([])
  const [ItemCount, setItemCount] = useState(1)
  const [selectedSize, setSelectedSize] = useState(CartData.map(() => null));

 useEffect(()=>{
  const GetCartDatas=async()=>{
    try{
          const request= await axios.get('http://localhost:3500/Carts')
          const res=await request.data
          setCartData(res)
    }catch(err){
      console.log(err)
    }
  }
  GetCartDatas()
 },[])
  const RemoveItems =async (cart) => {
        try{
            await axios.delete(`http://localhost:3500/Carts/${cart}`)
            const filters=CartData.filter((item)=>item.id!==cart)
            setCartData(filters)
        }catch(err){
          console.log(err)
        }
  }
  function Increment() {
    setItemCount(ItemCount + 1)
  }
  function Decrement() {
    if (ItemCount > 1) {
      setItemCount(ItemCount - 1)
    }
  }

  const SelectSize = (size, cartIndex) => {
    const updates = [...selectedSize];
    updates[cartIndex] = size;
    setSelectedSize(updates);
    console.log(updates)
    console.log(selectedSize)

  };
  function TobuyPage (cartDatas,index){
    navigate('/BuyPage',{state:{cartDatas,selectedSize:selectedSize[index],ItemCount}})
  }
    
  return (
    <>
    <NavBar cart={cart}/>
    <div className="bg-dark" style={{ minHeight: '100vh' }}>

      <div className="container-fluid p-4">
        <div className="d-flex mb-3 align-items-center justify-content-between">
          <h4 className="text-white">
            Your Cart <span className="bi bi-cart-check-fill"></span>
          </h4>
        </div>
        {CartData.length > 0 ? (
          CartData.map((cartDatas, index) => (
            <div key={index} className="mb-4">
              <div
                className="card border border-1 shadow-sm"
                style={{
                  padding: '15px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                }}
              >
                <div className="row g-3 align-items-center">
                  <div className="col-12 col-md-4 d-flex justify-content-center">
                    <img
                      src={cartDatas.images}
                      alt="Shoe"
                      height="250"
                      className="img-fluid rounded"
                      style={{ maxWidth: '200px' }}
                    />
                  </div>

                  <div className="col-12 col-md-6" style={{ fontSize: '16px' }}>
                    <p><strong>Name:</strong> {cartDatas.name}</p>
                    <p><strong>Brand:</strong> {cartDatas.brand}</p>
                    <p><strong>Price:</strong> {cartDatas.price}</p>
                    <p><strong>Size:</strong>
                      {cartDatas.size.map((size, sizeIndex) => (
                        <span
                          className={`btn btn-outline-dark ms-2 border-0 ${selectedSize[index] === size ? 'bg-dark text-white' : ''
                            }`}
                          key={sizeIndex}
                          onClick={() => SelectSize(size, index)}
                        >
                          {size}
                        </span>
                      ))}
                    </p>

                    <p><strong>Ratings:</strong> {cartDatas.ratings}  <i className="bi bi-star-fill" style={{ fontSize: '10px' }}></i></p>
                    <p><strong>Description:</strong> {cartDatas.description}</p>
                    <p><strong>Reviews:</strong> {cartDatas.review}</p>
                  </div>

                  <div className="col-12 col-md-2 d-flex flex-column align-items-center gap-3 mt-3">
                    <div>
                      <button className="btn btn-outline-dark me-2" onClick={Decrement}>-</button>
                      <span className="fw-bold mx-2">{ItemCount}</span>
                      <button className="btn btn-outline-dark ms-2" onClick={Increment}>+</button>
                    </div>
                    <button className="btn btn-outline-dark" onClick={() => { RemoveItems(cartDatas.id) }}>
                      Remove Item
                    </button>
                    {/*  */}
                    <button className=' btn btn-outline-dark rounded '  onClick={()=>{TobuyPage(cartDatas,index)}}>Buy now<span className='bi bi-bag-check-fill ms-1'></span></button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className=" text-white text-center p-3 rounded">
            Carts is empty!
          </h2>
        )}
      </div>
    </div>
    </>
  );
};

export default Cart;

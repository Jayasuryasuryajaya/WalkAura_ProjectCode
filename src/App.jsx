import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MyOrders = React.lazy(() => import('./NavBar/MyOrders.jsx'));
const Cart = React.lazy(() => import('./NavBar/Cart.jsx'));
const BuyPage = React.lazy(() => import('./Interface/BuyPage.jsx'));
const ProductDescription = React.lazy(() => import('./Interface/ProductDescription.jsx'));
const Home = React.lazy(() => import('./Interface/Home.jsx'));
const LoginPage = React.lazy(() => import('./NavBar/LogInpage.jsx'));
const CreateAccount = React.lazy(() => import('./NavBar/CreateAccount.jsx'));
const CustomerInfos = React.lazy(() => import('./Interface/CustomerInfos.jsx'));
const Offers = React.lazy(() => import('./NavBar/Offers.jsx'));

const App = () => {
  const [IsCarts, setIsCart] = useState([]);
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('https://fast-silver-cow.glitch.me/First.json');
        setIsCart(response.data.Carts); 
      } catch (err) {
        console.error('Error fetching cart data:', err);
      }
    };
    fetchCartData();
  }, []);
  const Navigating = async (product) => {
    const isExist = IsCarts.some((prod) => prod.id === product.id);
    if (!isExist) {
      setIsCart([product,...IsCarts]);
      toast.success('Product added into your Cart',{position:'top-center'});
    } else {
      toast.info('Product is already in the cart.',{position:'top-center'});
    }
    
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <Suspense
        fallback={
          <div
            className="loader d-flex justify-content-center align-items-center fw-bold fs-1"
            style={{ minHeight: '100vh' }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home cart={IsCarts.length} Navigating={Navigating} />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/ProductDescription" element={<ProductDescription cart={IsCarts.length} Navigating={Navigating} />} />
          <Route path="/Cart" element={<Cart cart={IsCarts.length} />} />
          <Route path="/BuyPage" element={<BuyPage cart={IsCarts.length}/>} />
          <Route path="/CustomerInfos" element={<CustomerInfos />} />
          <Route path="/MyOrders" element={<MyOrders cart={IsCarts.length} />} />
          <Route path="/Offers" element={<Offers cart={IsCarts.length}/>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

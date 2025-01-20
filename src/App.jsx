import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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
        const response = await axios.get('http://localhost:3500/Carts');
        setIsCart(response.data);
      } catch (err) {
        console.error('Error fetching cart data:', err);
      }
    };
    fetchCartData();
  }, []);

  const Navigating = async (product) => {
    const isExist = IsCarts.some((prod) => prod.id === product.id);

    if (!isExist) {
      try {
        const response = await axios.post('http://localhost:3500/Carts', product, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setIsCart([...IsCarts, response.data]);
        toast.dark('Product Successfully Added to Cart!', { position: 'top-right', pauseOnHover: true });
      } catch (err) {
        console.error('Error adding product to cart:', err);
      }
    } else {
      toast.dark('Product Already in your Cart!', { position: 'top-right', pauseOnHover: true });
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

// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
//import './index.css'

createRoot(document.getElementById('root')).render(
//  <StrictMode>
<BrowserRouter>
    <App />
    </ BrowserRouter>
  // {/* </StrictMode> */}
)


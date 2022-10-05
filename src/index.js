import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch ,useNavigate } from "react-router-dom";
import ProductsList from './Components/ProductsList';
import Navbar from './Components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <>
{/*<BrowserRouter>*/}
    <App />
    {/*<Switch>
      <Route path="/" element={<App />} />
      <Route path="/ProductsList" element={<ProductsList />} />
    </Switch>
  </BrowserRouter>*/}
    </>
  //</React.StrictMode>
);




import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { PacmanLoader } from 'react-spinners';
import './App.css';
import { css } from "@emotion/react";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ProductsList from './Components/ProductsList';
import Modal from '../src/Components/Modal/Modal'
import ProductsNav from './Components/productsList/ProductsNav'


const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
  `;
function App() {
  const [loadingInProgress, setLoading] = useState(false);

  
  return (
    <div className="App">
        {loadingInProgress ? (
        <div className="loader-container">
          <PacmanLoader size={50} thickness={100} speed={100} color="white" loading={loadingInProgress} 
          css={override}/>
        </div>
      ) : (
      <Router>
      
      
              <Switch>
                <Route path="/" exact>
                <Navbar />
                
                  <Header />
                  <Products />
                  <About />
                  <Contact />
                </Route>
                <Route path="/productsList">
                <ProductsList />
                </Route>
                <Route path="/News/:slug" children={<Modal />}></Route>
              </Switch>
              <Footer />
            
        </Router>
      )} 
    </div>
      
  );

}

export default App;

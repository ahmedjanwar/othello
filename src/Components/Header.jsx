import React from 'react'
import ProductsList from './ProductsList';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons"
import Fimage1 from '../images/home-img-3.png'
import Fimage2 from '../images/home-img-3.png'
import Fimage3 from '../images/home-img-3.png'
import Fimage4 from '../images/logo1.png'




export default function Header() {
  
  return (
    <div id='main'>

    	  <div className='header-heading'>
          {/*<h1 class='moto'>Othello Vaasa</h1>*/}
          {/*<Ccards class='moto' />*/}
          <img src={Fimage1} alt="" class='moto'/>

            <h3>Where creativity meets tradition </h3>
            <h1><span>Bakery,</span> cafe,<br/> catering</h1>
            <p className='details'>
                  <b>Opening Hours</b><br />
                   <p>ma.må.Mon -- pe.fr.Fri <br /><strong>8-17</strong> <br />
                   la.lö.Sat.<br /> <strong>10-16</strong></p>


            </p> 
            <div className='socials'>

              <a href="https://www.instagram.com/othellovaasa/?hl=en" 
                target="_blank" rel="noreferrer" id='insta'>
                <button className='socials-button-in'><FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon></button>
              </a> 
              <a href="https://fi-fi.facebook.com/people/Othello-Vaasa/100069837910700/" 
                target="_blank" rel="noreferrer" id='fb'>
                <button className='socials-button-fb'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></button>
              </a>
              <a href="mailto:info@othellovaasa.com" 
                target="_blank" rel="noreferrer" id="email">
                <button className='socials-button-mail'><FontAwesomeIcon icon={faEnvelope} /></button>
              </a>
              <a className='callus' id='callus' href="tel:0400149399" >
                <button className='socials-button-call'> <FontAwesomeIcon icon={faPhone} /> </button>
              </a>
              
            </div>
            
            
           {/* <a href= './ProductsList' target="_blank" rel="noreferrer">
            <button className='product-button' id='p-list' >See Products</button>
            </a>  */}
               
            <div class="image-slider">
              <img src={Fimage2} alt=""/>
              <img src={Fimage3} alt=""/>
              <img src={Fimage4} alt=""/>
          </div>
       </div>
    </div>
  )
}

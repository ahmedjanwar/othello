import React from "react";
import "../Footer.css";
import {Link} from 'react-scroll';
import logo from '../images/logo1.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram, faFreebsd} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"


function Footer() {
  return (
    <div className="main-footer" id='footer'>
      <div className="container">
        <div className="row">
          {/* the map below */}
          <div className="col">

          {/*<img className="logo" src={logo} alt=''/>*/}

          </div>
          {/* Column1 */}
          <div className="col">
            <h2>Cermon oy</h2>
            <ui className="list-unstyled"> <br />
              +358 (0)40 014 93 99 <br />
              Vaasa, finalnd <br />
              Palosaarentie-Brändövägen 18   <br />
                    65200 Vaasa-Vasa
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Links</h4>
            <ui className="list-unstyled">
            <Link to='main' smooth={true} duration={2000}>Home</Link><br />
            <Link to='productsList' smooth={true} duration={2000}>Products</Link><br />
            <Link to='about' smooth={true} duration={2000}>About</Link><br />
            <Link to='contact' smooth={true} duration={2000}>Contact</Link>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Social Media</h4>
            <ui className="list-unstyled" style={{fontSize: "xx-large"}}>

            <a href="https://fi-fi.facebook.com/people/Othello-Vaasa/100069837910700/" 
              target="_blank" rel="noreferrer" id="fb">
              <button className='socials-button-fb'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></button>
            </a><br />
            <a href="https://www.instagram.com/othellovaasa/?hl=en" 
              target="_blank" rel="noreferrer" id="insta">
             <button className='socials-button-in'> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></button>
            </a><br />
            <a href="mailto:info@othellovaasa.com" 
              target="_blank" rel="noreferrer" id="email">
              <button className='socials-button-mail'> <FontAwesomeIcon icon={faEnvelope} /></button>
            </a><br />
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Othello Vaasa | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
    );
}

export default Footer;
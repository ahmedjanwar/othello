import React,{useState} from 'react'
import {Link} from 'react-scroll';
import logo from '../../images/logo1.png';

import {Navigate} from "react-router-dom"
import { Redirect } from 'react-router';

export default function Navbar() {


  const[nav,setnav] = useState(false);

  const changeBackground =() => {
    if (window.scrollY >= 50){
      setnav(true);
    }
    else{
      setnav(false);
    }
  }

  window.addEventListener('scroll',changeBackground);
  /*===============*/
  /*const navigation = useNavigate();*/
  /*=============*/
  return (
    <nav className={nav ? "nav active" :"nav"}>
      <Link to='main' className='logo' smooth={true} duration={2000}>
        <img src={logo} alt=''/>
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn'/>
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        

        <li><a href="/"  rel="noreferrer" className='productbox-button'>
          Home
        </a></li>
  
        
      </ul>
      

    </nav>
  )
}

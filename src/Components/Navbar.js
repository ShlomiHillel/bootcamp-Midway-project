import React,{useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../Context';
import CartCon  from './CartCon'

import logo from "../Assets/logo-regSize.png";


const Navbar=() => {
     const [scrolled,setScrolled]= useState(false);
     const [open,setOpen]= useState( false);
    
     const { cartIsOpen, cOpen, amount} = useContext(myContext);
  
     

    //  navbar tiny when scroll
     const handleScroll=() => { 
       window.scrollY>300 ? setScrolled(true): setScrolled(false) ;
       } 
     useEffect(() => { 
      window.addEventListener('scroll',handleScroll) 
    })
    
    let shrink = scrolled ?'nav-header nav-shrink':'nav-header';
   

    //  showing menu when responsive
    const handleHamToggle = () => {
      setOpen(!open); };
     let showHamInside = open ?'nav-links show-nav':'nav-links';

    //  showing shoping cart

     let showCart = cartIsOpen ? 'cover sshowCart' : 'cover'

    
     

    return (

        <nav className= 'navbar'>
          <div className='nav-center'>
            <div className={shrink}>
            <h3></h3>
        <div className='nav-container'>
          
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div> 
            <button onClick={cOpen} className="cart-btn"  ><i className="corner circle icon"></i> <i className="fas fa-shopping-cart"></i> </button>
              <Link to='/'>< img src={ logo }  alt='goodmorning' /></Link> 
              <button  type="button" className="nav-btn" onClick={handleHamToggle} ><i className="fas fa-angle-double-down"></i></button>      
              
             </div>
              
              <ul className={showHamInside} >
                <li><Link to='/'>home</Link></li>
                <li><Link to='/Products'>Products</Link></li>
                <li><Link to='/'>about us</Link></li>
                
              </ul>
              <div className={showCart}>  
      <div className='cart-container'>< CartCon />
        
             
      </div>
        </div>
    </div>
    
        </nav>



    )
  };
  
  export default Navbar;
  
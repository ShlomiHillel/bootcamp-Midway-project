import React,{useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../Context';
import Cart from './Cart'
import logo from "../Assets/logo-regSize.png";


const Navbar=() => {
     const [scrolled,setScrolled]= useState(false);
     const [open,setOpen]= useState( false);
    
     const { cartIsOpen, cClose, cOpen,} = useContext(myContext);
     const { amount } = useContext(myContext)
  

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
            <button onClick={cOpen} className="cart-btn"  > <i className="fas fa-shopping-cart"></i> </button>
              <Link to='/'>< Pimage src={ logo }  alt='goodmorning' /></Link> 
              <button  type="button" className="nav-btn" onClick={handleHamToggle} ><i classname="fas fa-angle-double-down"></i></button>      
              
             </div>
              
              <ul className={showHamInside} >
                <li><Link to='/'>home</Link></li>
                <li><Link to='/Products'>Products</Link></li>
                <li><Link to='/'>home</Link></li>
                
              </ul>
              <div className={showCart}>
              <div className='cart-container'>
                <h1>cart content</h1>
                <Cart/>
                <button className='xcircle-btn' onClick={cClose}>
                <i className="far fa-times-circle"></i>        
                </button>
              </div>
              </div>
              <div className='nav-container'>
       <i className="far fa-circle"></i>
       <div className='amount-container'>
         <p className='total-amount'>{amount}</p>
       </div>
     </div>
    </div>
    
        </nav>



    )
  };
  
  export default Navbar;
  
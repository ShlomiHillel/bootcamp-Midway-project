import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/good-morning logo.jpg";


const Navbar=() => {
     const [scrolled,setScrolled]= useState(false);
     const [open,setOpen]= useState( false);

     const handleScroll=() => { 
       window.scrollY>300 ? setScrolled(true): setScrolled(false) ; } 
   
    useEffect(() => { 
      window.addEventListener('scroll',handleScroll) })

    let shrink = scrolled ?'nav-header nav-shrink':'nav-header';
   
    const handleToggle = () => {
      setOpen(!open ); };

     let show = open ?'nav-links show-nav':'nav-links';


    return (

        <nav className= 'navbar'>
          <div className='nav-center'>
            <div className={shrink}>
              <Link to='/'>< img src={ logo }  alt='goodmorning' /></Link> 
              <button  type="button" className="nav-btn" onClick={handleToggle} > butten</button>
            </div>
              <ul className={show} >
                <li><Link to='/'>home</Link></li>
                <li><Link to='/Products'>Products</Link></li>
              </ul>
          </div>
        </nav>
    )
  };
  
  export default Navbar;
  
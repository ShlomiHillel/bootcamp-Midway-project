import React,{useEffect, useState} from 'react';
import  "./Navbar.css";

const Navbar=() => {
    const [scrolled,setScrolled]= useState(false);
  
    const handleScroll=() => {

    let v =  window.scrollY
      v > 200 ?  setScrolled(true): setScrolled(false) ;
        } 
   

    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  
    
    
    return (

        <div>
            <input type="button" class="asa" value="home" />


        
            <div className={ scrolled ? 'navbar scrolled' : 'navbar'}>
          {/* <div className="logo">
            <img src={Logo} alt="Logo" title="Logo" />
          </div> */}
  
              <ul className="navi">
                <li><a href="#post1">Home</a></li>
                <li><a href="#post2">Home</a></li>
                <li><a href="#post3">Home</a></li>
                <li><a href="#post4">Home</a></li>
              </ul>
          
  
      </div></div>
    )
  };
  
  export default Navbar;
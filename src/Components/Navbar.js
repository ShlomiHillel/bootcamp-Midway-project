

import React,{useEffect, useState} from 'react';

const Navbar=() => {
    const [scrolled,setScrolled]=useState(false);
  
    const handleScroll=() => {
      
      if(window.scrollY > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  
    let x=['navbar'];
    if(scrolled){
      x.push('scrolled');
    }
    return (
      <div className={x.join(" ")}>
          {/* <div className="logo">
            <img src={Logo} alt="Logo" title="Logo" />
          </div> */}
  
          <div className="navigation">
              <ul>
                <li><a href="#post1">Home</a></li>
                <li><a href="#post2">Home</a></li>
                <li><a href="#post3">Home</a></li>
                <li><a href="#post4">Home</a></li>
              </ul>
          </div>
  
      </div>
    )
  };
  
  export default Navbar;
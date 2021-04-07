import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import PageNotFound from './Pages/PageNotFound'
import ProductsList from './Pages/ProductsList'
import Navbar from './Components/Navbar';
// import Initialize from './Components/Initialize';
import Cart from './Components/Cart'
// import Api from './Components/Api';
import './App.css';




function App() {
  return (

    <div >
      <BrowserRouter>

         <Navbar/>
         {/* <Initialize/> */}
        
         <Switch>
          <Route exact path='/'  component={ Cart }/>
          {/* <Route exact path='/Products/' component={ ProductsList}/> */}
          {/* <Route exact path='/Cart' component={ Cart }/> */}
          <Route component={ PageNotFound }/>
         </Switch>
      </BrowserRouter>      
       

       
    </div>
      
  );
} 

export default App;

// for props f
// <Route path='/MainPage' render={(props) => (<MainPage {...props} isAuthed={true} />)}/>

import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import PageNotFound from './Pages/PageNotFound'
import ProductsList from './Pages/ProductsList'
import SingleProduct from './Pages/SingleProduct'
import Navbar from './Components/Navbar';
import Initialize from './Components/Initialize';
// import CartCon  from './Components/CartCon'
import Api from './Components/Api';
import './App.css';




function App() {
  return (

    <div >
      <BrowserRouter>

         <Navbar/>
         
         <Api/>
        
         <Switch>
          <Route exact path='/'  component={ HomePage }/>
          <Route exact path='/Products/' component={ ProductsList}/>
          <Route exact path='/Products/:type' component={ SingleProduct }/> 
          
          <Route component={ PageNotFound }/>
         </Switch>
      </BrowserRouter>      
       

       
    </div>
      
  );
} 

export default App;

// for props f
// <Route path='/MainPage' render={(props) => (<MainPage {...props} isAuthed={true} />)}/>

import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import PageNotFound from './Pages/PageNotFound'
import ProductsList from './Pages/ProductsList'
import SingleProdut from './Pages/SingleProdut'
import Navbar from './Components/Navbar';
import Links from './Components/Links';
import Api from './Components/Api';
import './App.css';




function App() {
  return (

    <div >
      <BrowserRouter>
         <Navbar/>
         <Links/>
         <Api/>
         
         <Switch>
          <Route exact path='/'  component={ HomePage }/>
          <Route exact path='/Products/' component={ ProductsList}/>
          <Route exact path='/Products/:type' component={ SingleProdut }/> 
          <Route component={ PageNotFound }/>
         </Switch>
      </BrowserRouter>      
       

       
    </div>
      
  );
} 

export default App;

// for props f
// <Route path='/MainPage' render={(props) => (<MainPage {...props} isAuthed={true} />)}/>

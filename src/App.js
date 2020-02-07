import React from 'react';
import { Route } from 'react-router-dom';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Home from './components/Layout/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Route path='/product-details' component = { ProductDetails }/>
      <Route path='/login' component = { Login }/>
      <Route path='/' exact component = { Home }/>
    </div>
  );
}

export default App;

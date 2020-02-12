import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Layout/Home/Home';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Route path='/cart' component = { Cart } />
      <Route path='/product-details' component = { ProductDetails }/>
      <Route path='/login' component = { Login }/>
      <Route path='/' exact component = { Home }/>
    </div>
  );
}

export default App;

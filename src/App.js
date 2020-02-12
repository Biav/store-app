import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Layout/Home/Home';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import AddProduct from './components/Products/AddProduct/AddProduct';

function App() {
  return (
    <div>
      <Route path='/cart' component = { Cart } />
      <Route path='/product-details' component = { ProductDetails }/>
      <Route path='/add-product' component = { AddProduct }/>
      <Route path='/login' component = { Login }/>
      <Route path='/' exact component = { Home }/>
    </div>
  );
}

export default App;

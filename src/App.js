import React from 'react';
import { Route } from 'react-router-dom';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Home from './components/Layout/Home/Home';

function App() {
  return (
    <div>
      <Route path='/product-details' component={ ProductDetails }/>
      <Route path='/' exact component = { Home }/>
    </div>
  );
}

export default App;

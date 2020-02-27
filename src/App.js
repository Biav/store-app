import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Layout/Home/Home';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import AddProduct from './components/Products/AddProduct/AddProduct';
import Logout from './components/Login/Logout';
import { connect } from 'react-redux';
import * as loginActions from './store/actions';

class App extends Component {
  componentDidMount() {
    this.props.checkLogin();
  }

  render(){
    return (
      <div>
        <Route path='/cart' component = { Cart } />
        <Route path='/product-details' component = { ProductDetails }/>
        <Route path='/add-product' component = { AddProduct }/>
        <Route path='/login' component = { Login }/>
        <Route path='/logout' exact component = { Logout }/>
        <Route path='/' exact component = { Home }/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkLogin: () => dispatch(loginActions.checkLogin())
  }
}

export default connect(null, mapDispatchToProps)(App);

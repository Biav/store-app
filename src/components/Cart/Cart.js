import React, { Component } from 'react';
import Menu from './../Layout/Menu/Menu';
import Footer from './../Layout/Footer/Footer';
import Breadcrumb from './../Layout/Breadcrumb/Breadcrumb';
import CartItems from './CartItems/CartItems';

class Cart extends Component {
    render() {
        return(
            <>
               <Menu/>
               <Breadcrumb name="Cart"
                           description="Very us move be blessed multiply night"/>
                <CartItems/>
               <Footer/>
            </>
        )
    }
}

export default Cart;
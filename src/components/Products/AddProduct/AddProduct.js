import React, { Component } from 'react';
import Menu from '../../Layout/Menu/Menu';
import Footer from '../../Layout/Footer/Footer';
import ProductForm from './Product/ProductForm';
import './AddProduct.scss';

class AddProduct extends Component {
    render() {
        return(
            <>
                <Menu/>
                <ProductForm/>
                <Footer/>
            </>
        )
    }
}

export default AddProduct;
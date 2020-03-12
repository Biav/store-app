import React, { Component } from 'react';
import Menu from '../../Layout/Menu/Menu';
import Footer from '../../Layout/Footer/Footer';
import ProductForm from './Product/ProductForm';
import './AddProduct.scss';
import Breadcrumb from '../../Layout/Breadcrumb/Breadcrumb';

class AddProduct extends Component {
    render() {
        return(
            <>
                <Menu/>
                <Breadcrumb name="Add Product" 
                            description="Add Products to store"/>
                <ProductForm/>
                <Footer/>
            </>
        )
    }
}

export default AddProduct;
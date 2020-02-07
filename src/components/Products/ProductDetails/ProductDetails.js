import React, { Component } from 'react';
import Menu from './../../Layout/Menu/Menu';
import Footer from './../../Layout/Footer/Footer';
import Breadcrumb from './../../Layout/Breadcrumb/Breadcrumb';
import ProductImage from './Product/ProductImage';
import ProductDetail from './Product/ProductDetail';

class ProductDetails extends Component {
    render() {

        let product = {
			name: "Faded SkyBlu Denim Jeans",
			listPrice: 20,
            salePrice: 10,
            description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.",
			imageProduct: 'product1.jpg',
			linkProduct: '/#product'
		};


        return(
            <div>
                <Menu/>
                <Breadcrumb name="Product Details" 
                            description="Very us move be blessed multiply night"/>
                <div className="product_image_area">
                    <div className="container">
                        <div className="row s_product_inner">
                        <ProductImage/>
                        <ProductDetail name={ product.name }
                                       description = { product.description }/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ProductDetails;
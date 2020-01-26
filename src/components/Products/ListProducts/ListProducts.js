import React, { Component } from 'react';
import Product from './../Product/Product';
import './ListProducts.scss';

class ListProducts extends Component {
	render() {

		let products = [
			{
				name: "Red women purses",
				listPrice: 20,
				salePrice: 10,
				imageProduct: 'product1.jpg',
				linkProduct: '/#product'
			},
			{
				name: "adidas sport shoe",
				listPrice: 80,
				salePrice: 60,
				imageProduct: 'product2.jpg',
				linkProduct: '/#product'
			},
			{
				name: "Latest men’s sneaker",
				listPrice: 40,
				salePrice: 30,
				imageProduct: 'product3.jpg',
				linkProduct: '/#product'
			},
			{
				name: "Red women purses",
				listPrice: 20,
				salePrice: 10,
				imageProduct: 'product2.jpg',
				linkProduct: '/#product'
			},
			{
				name: "adidas sport shoe",
				listPrice: 80,
				salePrice: 60,
				imageProduct: 'product1.jpg',
				linkProduct: '/#product'
			},
			{
				name: "Latest men’s sneaker",
				listPrice: 40,
				salePrice: 30,
				imageProduct: 'product3.jpg',
				linkProduct: '/#product'
			}
		];

		const ListProducts = Object.keys(products).map((index) => {
			return (
				<Product name = { products[index].name }
						 listPrice = { products[index].listPrice }
						 salePrice = { products[index].salePrice }
						 imageProduct = { products[index].imageProduct }
						 linkProduct = { products[index].linkProduct }
				/>
			)
		});

		return (
			<div className="products">
				<section className="feature_product_area section_gap_bottom_custom">
					<div className="container">
						<div className="row justify-content-center">
						<div className="col-lg-12">
							<div className="main-title">
								<h2><span>Produtos em destaque</span></h2>
								<p>Confira nossos produtos mais vendidos</p>
							</div>
						</div>
					</div>

					<div className="row">
						{ListProducts}
					</div>
				</div>
			</section>
			</div>
		)
	}
}

export default ListProducts;
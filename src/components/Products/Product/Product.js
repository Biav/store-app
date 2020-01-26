import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
	render() {
		return (
			<>
				<div className="col-lg-4 col-md-6">
					<div className="single-product">
						<div className="product-img">
							<img className="img-fluid w-100" src = { require(`./../../../assets/products/${this.props.imageProduct}`)} alt="" />
							<div className="p_icon">
								<a href = "/product-details">
									<div className="open-product"> </div>
								</a>
								<a href = "/product-details">
									<div className="shop-product"> </div>
								</a>
							</div>
						</div>
						<div className="product-btm">
							<a href = "/product-details" className="d-block">
								<h4> { this.props.name } </h4>
							</a>
							<div className="mt-3">
								<span className="mr-4">R$ { this.props.salePrice } </span>
								<del>R$ { this.props.listPrice } </del>
							</div>
						</div>
					</div>
				</div>
			</> 
		)
	}
}

export default Product;
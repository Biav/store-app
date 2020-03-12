import React, { Component } from 'react';
import Product1 from '../../../../assets/products/product2.jpg'


class CartItem extends Component {
	render() {
		return(
			<>
				<div className="cart-item">
					<div className="col-md-6">
						<div className="media">
							<div className="d-flex">
								<img
										src={Product1}
										alt=""
								/>
							</div>
							<div className="media-body">
								<p>Minimalistic shop for multipurpose use</p>
							</div>
						</div>
					</div>
					<div className="col-md-2">
							<div className="price">$360.00</div>
					</div>
					<div className="col-md-2">
						<div className="product_count">
							<input
									type="number"
									name="qty"
									id="sst"
									maxLength="12"
									value="1"
									title="Quantity:"
									className="input-text qty"
							/>
						</div>
					</div>
					<div className="col-md-2">
						<div className="price">$720.00</div>
					</div>
				</div>
			</>
		)
	}
}

export default CartItem;
import React, { Component } from 'react';
import Product1 from '../../../../assets/products/product2.jpg'


class CartItem extends Component {
	render() {
		return(
			<>
				<div class="cart-item">
					<div class="col-md-6">
						<div class="media">
							<div class="d-flex">
								<img
										src={Product1}
										alt=""
								/>
							</div>
							<div class="media-body">
								<p>Minimalistic shop for multipurpose use</p>
							</div>
						</div>
					</div>
					<div class="col-md-2">
							<div class="price">$360.00</div>
					</div>
					<div class="col-md-2">
						<div class="product_count">
							<input
									type="number"
									name="qty"
									id="sst"
									maxlength="12"
									value="1"
									title="Quantity:"
									class="input-text qty"
							/>
						</div>
					</div>
					<div class="col-md-2">
						<div class="price">$720.00</div>
					</div>
				</div>
			</>
		)
	}
}

export default CartItem;
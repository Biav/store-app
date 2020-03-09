import React, { Component } from 'react';
import CartItem from './CartItem/CartItem';
import Shipping from './Shipping/Shipping';
import CartTotal from './CartTotal/CartTotal';
import CartTitle from './CartTitle/CartTitle';
import Checkout from './Checkout/Checkout';
import './../Cart.scss';

class CartItems extends Component {
	render() {
		return(
			<>
				<section class="cart_area">
					<div class="container">
						<div class="cart_inner">
							<div class="table-responsive">
								<div class="cart-items">
									<CartTitle />
									<CartItem />
									<CartItem />
									<CartItem />
									<CartTotal/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
			)
	}
}

export default CartItems;
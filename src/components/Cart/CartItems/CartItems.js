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
				<section className="cart_area">
					<div className="container">
						<div className="cart_inner">
							<div className="table-responsive">
								<div className="cart-items">
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
import React, { Component } from 'react';

class Shipping extends Component {
	render() {
		return(
			<>
				<div class="shipping_area">
					<div></div>
					<div></div>
					<div>
						<h5>Shipping</h5>
					</div>
					<div>
						<div class="shipping_box">
							<ul class="list">
								<li>
									<a href="#">Flat Rate: $5.00</a>
								</li>
								<li>
									<a href="#">Free Shipping</a>
								</li>
								<li>
									<a href="#">Flat Rate: $10.00</a>
								</li>
								<li class="active">
									<a href="#">Local Delivery: $2.00</a>
								</li>
							</ul>
							<h6>
								Calculate Shipping
								<i class="fa fa-caret-down" aria-hidden="divue"></i>
							</h6>
							<select class="shipping_select">
								<option value="1">Bangladesh</option>
								<option value="2">India</option>
								<option value="4">Pakistan</option>
							</select>
							<select class="shipping_select">
								<option value="1">Select a State</option>
								<option value="2">Select a State</option>
								<option value="4">Select a State</option>
							</select>
							<input type="text" placeholder="Postcode/Zipcode" />
							<a class="gray_btn" href="#">Update Details</a>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default Shipping;
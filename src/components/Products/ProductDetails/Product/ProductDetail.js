import React, { Component } from 'react';

class ProductDetail extends Component {
	render(){
		return(
			<>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text">
						<h3> { this.props.name } </h3>
						<h2>$149.99</h2>
						<ul className="list">
							<li>
							<a className="active" href="/#product">
									<span>Category</span> : Household</a
							>
							</li>
							<li>
							<a href="/#product"> <span>Availibility</span> : In Stock</a>
							</li>
						</ul>
						<p>
								{ this.props.description }
						</p>
						<div className="product_count">
								<label for="qty">Quantity:</label>
								<input
								type="number"
								name="qty"
								id="sst"
								maxlength="12"
								value="1"
								title="Quantity:"
								className="input-text qty"
								/>
								<button
								onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
								className="increase items-count"
								type="button"
								>
								<i className="lnr lnr-chevron-up"></i>
								</button>
								<button
								onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
								className="reduced items-count"
								type="button"
								>
								<i className="lnr lnr-chevron-down"></i>
								</button>
						</div>
						<div className="card_area">
								<a className="main_btn" href="/#cart">Add to Cart</a>
								<a className="icon_btn" href="/#cart">
								<i className="lnr lnr lnr-diamond"></i>
								</a>
								<a className="icon_btn" href="/#cart">
								<i className="lnr lnr lnr-heart"></i>
								</a>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default ProductDetail;


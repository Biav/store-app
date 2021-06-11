import React, { Component} from 'react';

class Checkout extends Component {
    render() {
        return(
            <>
                <div className="out_button_area">
                    <div>
                        <div className="checkout_btn_inner">
                            <a className="gray_btn" href="/home">Continue Shopping</a>
                            <a className="main_btn" href="/checkout">Proceed to checkout</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Checkout;
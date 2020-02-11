import React, { Component} from 'react';

class Checkout extends Component {
    render() {
        return(
            <>
                <div class="out_button_area">
                    <div>
                        <div class="checkout_btn_inner">
                            <a class="gray_btn" href="#">Continue Shopping</a>
                            <a class="main_btn" href="#">Proceed to checkout</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Checkout;
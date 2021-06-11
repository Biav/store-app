import React from 'react';

const cartTitle = () => {
    return(
        <>
            <div className="cart-title">
                <div className="col-md-6">Product</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-2">Quantity</div>
                <div className="col-md-2">Total</div>
            </div>
        </>
    )
}

export default cartTitle;
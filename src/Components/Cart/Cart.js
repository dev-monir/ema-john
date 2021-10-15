import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, pro)=> total + pro.price, 0);

    let shipping = 0;
    if (totalPrice>35) {
        shipping = 0;
    }
    else if (totalPrice>15) {
        shipping = 4.99;
    }
    else if (totalPrice>0){
        shipping = 6.99;
    }
    
    const tax = totalPrice/10;
    const total = totalPrice + tax + shipping;
    const formateNumber = num => {
        const precisions = num.toFixed(2);
        return Number(precisions);
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Item Ordered : {cart.length}</p>
            <p>Total Price: {formateNumber(totalPrice)}</p>
            <p><small>Shipping Cost: {formateNumber(shipping)}</small></p>
            <p>Tax total : {formateNumber(tax)}</p>
            <p><strong>Total Price (including vat): {formateNumber(total)}</strong></p>
            <Link to="/review"><button>Review Order</button></Link>

        </div>
    );
};

export default Cart;
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
const Product = (props) => {
    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div className = "product-img">
                <img src={img} alt="img" /> 
            </div>
            <div className = "product-txt">
                <h4><Link to={'/product/'+ key}>{name}</Link></h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock __Order soon</small></p>
               {props.showAddToCart===true && <button onClick = {()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;
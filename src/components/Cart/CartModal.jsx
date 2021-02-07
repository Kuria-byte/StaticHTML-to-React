import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
//utils
import { selectCartItems } from "../../Redux/Cart/cart.selector";
import { selectCartItemsCount,selectCartTotal } from '../../Redux/Cart/cart.selector';
//component
import CartItem from './CartItem';

const CartModal = ({ cartItems, itemCount , total, history}) => {
    return (
        <div>
            <div className="dropdown cart-dropdown">
                <a href="/" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                    <i className="icon-shopping-cart"></i>
                    <span className="cart-count">{itemCount}</span>
                    <span className="cart-txt">$ {total}</span>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-cart-products">

                        {cartItems.map((cartItem) => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))}

                    </div>

                    <div className="dropdown-cart-total">
                        <span>Total</span>

                        <span className="cart-total-price">${total}</span>
                    </div>
                    <div className="dropdown-cart-action">
                        <span className="btn btn-primary" onClick={() => { history.push("/checkout");}} >View Cart</span>
                        <span className="btn btn-outline-primary-2" onClick={() => { history.push("/checkout");}}><span>Checkout</span><i className="icon-long-arrow-right"></i></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    itemCount: selectCartItemsCount,
    total: selectCartTotal
});


export default withRouter (connect(mapStateToProps)(CartModal));

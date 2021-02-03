import React from 'react'
//images
import Product1 from '../../assets/images/products/cart/product-1.jpg'
// import Product2 from '../../assets/images/products/cart/product-2.jpg'
import CartItem from './CartItem'

const CartModal = () => {
    return (
        <div>
            <div className="dropdown cart-dropdown">
                <a href="/" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                    <i className="icon-shopping-cart"></i>
                    <span className="cart-count">2</span>
                    <span className="cart-txt">$ 164,00</span>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-cart-products">
                        <CartItem Product1={Product1} />
                        <CartItem Product1={Product1}/>
                    </div>

                    <div className="dropdown-cart-total">
                        <span>Total</span>

                        <span className="cart-total-price">$160.00</span>
                    </div>
                    <div className="dropdown-cart-action">
                        <a href="cart.html" className="btn btn-primary">View Cart</a>
                        <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartModal

import React from 'react'

const CartItem = ({ Product1 }) => {
    return (
        <div>
            <div className="product">
                <div className="product-cart-details">
                    <h4 className="product-title">
                        <a href="product.html">Beige knitted elastic runner shoes</a>
                    </h4>

                    <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>
                                                x $84.00
                                            </span>
                </div>

                <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                        <img src={Product1} alt="product" />
                    </a>
                </figure>
                <a href="/" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
            </div>


        </div>
    )
}

export default CartItem

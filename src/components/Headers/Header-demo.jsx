import React from 'react'
import { ReactComponent as Logo} from '../../Images/logo1.svg'
import Product1 from '../../assets/images/products/cart/product-1.jpg'
import Product2 from '../../assets/images/products/cart/product-2.jpg'

function Header() {
    return (
        // <div>

        <div className="page-wrapper">
        <header className="header header-6">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <ul className="top-menu top-link-menu d-none d-md-block">
                            <li>
                                <a href="/">Links</a>
                                <ul>
                                    <li><a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="header-right">
                        <div className="social-icons social-icons-color">
                            <a href="/" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                            <a href="/" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                            <a href="/" className="social-icon social-pinterest" title="Instagram" target="_blank"><i className="icon-pinterest-p"></i></a>
                            <a href="/" className="social-icon social-instagram" title="Pinterest" target="_blank"><i className="icon-instagram"></i></a>
                        </div>
                        <ul className="top-menu top-link-menu">
                            <li>
                                <a href="/">Links</a>
                                <ul>
                                    <li><a href="#signin-modal" data-toggle="modal"><i className="icon-user"></i>Login</a></li>
                                </ul>
                            </li>
                        </ul>



                    </div>
                </div>
            </div>
            <div className="header-middle">
                <div className="container">
                    <div className="header-left">
                        <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                            <a href="/" className="search-toggle" role="button"><i className="icon-search"></i></a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper search-wrapper-wide">
                                    <label for="q" className="sr-only">Search</label>
                                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="header-center">
                        <a href="index.html" className="logo">
                           <Logo/>
                        </a>
                    </div>

                    <div className="header-right">
                        <a href="wishlist.html" className="wishlist-link">
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">3</span>
                            <span className="wishlist-txt">My Wishlist</span>
                        </a>

                        <div className="dropdown cart-dropdown">
                            <a href="/" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">2</span>
                                <span className="cart-txt">$ 164,00</span>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
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
                                                <img src={Product1} alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="/" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                    </div>

                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">Blue utility pinafore denim dress</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $76.00
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                <img src={Product2} alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="/" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                    </div>
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
                </div>
            </div>

            <div className="header-bottom sticky-header">
                <div className="container">
                    <div className="header-left" style={{ }}>
                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="megamenu-container active">
                                    <a href="/" className="sf-with-ul">Home</a>

                                </li>
                                <li>
                                    <a href="category.html" className="sf-with-ul">Shop</a>

                                   
                                </li>
                                
              
                                <li>
                                    <a href="blog.html" className="sf-with-ul">Blog</a>

                                </li>
                    
                            </ul>
                        </nav>

                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>
                    </div>

                    <div className="header-right">
                        <i className="la la-lightbulb-o"></i><p><span>Clearance Up to 30% Off</span></p>
                    </div>
                </div>
            </div>
        </header>
        
        </div>      
         
    
     
    )
}

export default Header

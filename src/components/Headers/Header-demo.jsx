import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleMobileMenu } from '../../Redux/Mobile/moile.actions'
import { selectMenuHidden } from '../../Redux/Mobile/mobile.selector'
// Resources
import { ReactComponent as Logo } from '../../Images/logo1.svg'


//components
import MobileMenu from '../MobileMenu/mobileMenu'
import SignInModal from '../SignIn-Modal/sign-in-sign-up'
import CartModal from '../Cart/CartModal'
import SearchBar from '../SearchBar/SearchBar'

const Header = ({ hidden, toggleMobileMenu }) => {


    return (
        <div>
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
                            <SearchBar />
                        </div>
                        <div className="header-center">
                            <a href="index.html" className="logo">
                                {/* <img src={logo} alt='logos' style={{height: 125 , width: 130}}></img> */}
                                <Logo/>
                            </a>
                        </div>

                        <div className="header-right">
                            <a href="wishlist.html" className="wishlist-link">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count">3</span>
                                <span className="wishlist-txt">My Wishlist</span>
                            </a>
                            <CartModal />
                        </div>
                    </div>
                </div>

                <div className="header-bottom sticky-header">
                    <div className="container">
                        <div className="header-left">
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

                            <button className="mobile-menu-toggler" >
                                <span className="sr-only" >Toggle mobile menu</span>
                                <i className="icon-bars" onClick={toggleMobileMenu}></i>
                            </button>
                        </div>

                        <div className="header-right">
                            <i className="la la-lightbulb-o"></i><p><span>Clearance Up to 30% Off</span></p>
                        </div>
                    </div>

                </div>
                {hidden === false ? <MobileMenu /> : ''}
            </header>
            <SignInModal />
        </div>


    )
}

const mapStateToProps = createStructuredSelector({
    hidden: selectMenuHidden
});

const mapDispatchToProps = (dispatch) => ({
    toggleMobileMenu: () => dispatch(toggleMobileMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

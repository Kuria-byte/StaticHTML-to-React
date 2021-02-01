import { connect } from "react-redux";
// import {createStructuredSelector} from 'reselect'
import {toggleMobileMenu} from '../../Redux/Mobile/moile.actions'
// import {selectMenuHidden} from '../../Redux/Mobile/mobile.selector'

const MobileMenu =({toggleMobileMenu}) => {
    return (
        <div>

            <div className="mobile-menu-overlay"></div>

            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close" onClick={toggleMobileMenu} ></i></span>
        
                    <form action="#" method="get" className="mobile-search">
                        <label for="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                    </form>

                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li className="active">
                                <a href="index.html">Home</a>

                                <ul>
                                    <li><a href="index-1.html">01 - furniture store</a></li>
                                    
                                </ul>
                            </li>
                            <li>
                                <a href="category.html">Shop</a>
                                <ul>
                                    <li><a href="category-list.html">Shop List</a></li>
                                    
                                </ul>
                            </li>
                            <li>
                                <a href="product.html" className="sf-with-ul">Product</a>
                                <ul>
                                    <li><a href="product.html">Default</a></li>
                                    
                                </ul>
                            </li>
                            <li>
                                <a href="/">Pages</a>
                                <ul>
                                    <li>
                                        <a href="about.html">About</a>

                                        <ul>
                                            <li><a href="about.html">About 01</a></li>
                                            <li><a href="about-2.html">About 02</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>

                                        <ul>
                                            <li><a href="contact.html">Contact 01</a></li>
                                            <li><a href="contact-2.html">Contact 02</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="faq.html">FAQs</a></li>
                                    <li><a href="404.html">Error 404</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                </ul>
                            </li>
                            
                         
                        </ul>
                    </nav>

                    <div className="social-icons">
                        <a href="/" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                        <a href="/" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                        <a href="/" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                        <a href="/" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                    </div>
                </div>
            </div>


        </div>
    )
}


    
    const mapDispatchToProps = (dispatch) =>({
        toggleMobileMenu : ()=> dispatch(toggleMobileMenu())
    })

export default connect(null,mapDispatchToProps) (MobileMenu)

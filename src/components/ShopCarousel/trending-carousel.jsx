import React from 'react'
import OwlCarousel from 'react-owl-carousel';
// Product Images
import product1 from '../../assets/images/demos/demo-6/products/product-1-1.jpg'
import product2 from '../../assets/images/demos/demo-6/products/product-2-1.jpg'
import product3 from '../../assets/images/demos/demo-6/products/product-3-1.jpg'
import product4 from '../../assets/images/demos/demo-6/products/product-1-2.jpg'
import product5 from '../../assets/images/demos/demo-6/products/product-4-1.jpg'
import product6 from '../../assets/images/demos/demo-6/products/product-4-2.jpg'

const owl_options = {
    items: 4,
    dots: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 2,
        },
        480: {
            items: 2,
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 4,
            nav: true,
            dots: false
        }

    }
};

const TrendingCarousel = () => {
    return (
        <div>
            <div className="mb-5"></div>
            <div className="container">
                <div className="heading heading-center mb-3">
                    <h2 className="title">Trending</h2>

                    <ul className="nav nav-pills justify-content-center" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="trending-all-link" data-toggle="tab" href="#trending-all-tab" role="tab" aria-controls="trending-all-tab" aria-selected="true">All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="trending-women-link" data-toggle="tab" href="#trending-women-tab" role="tab" aria-controls="trending-women-tab" aria-selected="false">Women</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="trending-men-link" data-toggle="tab" href="#trending-men-tab" role="tab" aria-controls="trending-men-tab" aria-selected="false">Men</a>
                        </li>
                    </ul>
                </div>


                <div className="tab-content tab-content-carousel">
                    <div className="tab-pane p-0 fade show active" id="trending-all-tab" role="tabpanel" aria-labelledby="trending-all-link">
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl">

                            <OwlCarousel {...owl_options} >

                                <div className="product product-7 text-center">
                                    <figure className="product-media">

                                        <img src={product1} alt="Product" className="product-image" />
                                        <img src={product1} alt="Product" className="product-image-hover" />


                                        <div className="product-action-vertical">
                                            <span className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></span>
                                        </div>

                                        <div className="product-action">
                                            <span className="btn-product btn-cart"><span>add to cart</span></span>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <span>Clothing</span>
                                        </div>
                                        <h3 className="product-title"><a href="/">Denim jacket</a></h3>
                                        <div className="product-price">
                                            $19.99
                                    </div>

                                        {/* <div className="product-nav product-nav-thumbs">
                                        <a  href ="/" className="active">
                                            <img src="assets/images/demos/demo-6/products/product-1-thumb.jpg" alt="product desc"/>
                                        </a>
                                        <a  href ="/">
                                            <img src="assets/images/demos/demo-6/products/product-1-2-thumb.jpg" alt="product desc"/>
                                        </a>
                                        <a  href ="/">
                                            <img src="assets/images/demos/demo-6/products/product-1-3-thumb.jpg" alt="product desc"/>
                                        </a>
                                    </div>    */}
                                    </div>
                                </div>

                                <div className="product product-7 text-center">
                                    <figure className="product-media">

                                        <img src={product2} alt="Product " className="product-image" />
                                        <img src={product2} alt="Product " className="product-image-hover" />


                                        <div className="product-action-vertical">
                                            <span className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></span>
                                        </div>

                                        <div className="product-action">
                                            <span className="btn-product btn-cart"><span>add to cart</span></span>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <span>Shoes</span>
                                        </div>
                                        <h3 className="product-title"><a href="/">Sandals</a></h3>
                                        <div className="product-price">
                                            $24.99
                                    </div>
                                    </div>
                                </div>

                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-sale">sale</span>

                                        <img src={product3} alt="Product" className="product-image" />
                                        <img src={product3} alt="Product" className="product-image-hover" />


                                        <div className="product-action-vertical">
                                            <span className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></span>
                                        </div>

                                        <div className="product-action">
                                            <span className="btn-product btn-cart"><span>add to cart</span></span>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 className="product-title"><a href="/">Printed sweatshirt</a></h3>
                                        <div className="product-price">
                                            <span className="new-price">Now $7.99</span>
                                            <span className="old-price">Was $12.99</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="product product-7 text-center">
                                    <figure className="product-media">

                                        <img src={product5} alt="product" className="product-image" />
                                        <img src={product5} alt="product" className="product-image-hover" />


                                        <div className="product-action-vertical">
                                            <span className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></span>
                                        </div>

                                        <div className="product-action">
                                            <a href="/" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 className="product-title"><a href="/">Linen-blend paper bag trousers</a></h3>
                                        <div className="product-price">
                                            $17.99
                                    </div>

                                        {/* <div className="product-nav product-nav-thumbs">
                                        <a  href ="/" className="active">
                                            <img src="assets/images/demos/demo-6/products/product-4-thumb.jpg" alt="product desc"/>
                                        </a>
                                        <a  href ="/">
                                            <img src="assets/images/demos/demo-6/products/product-4-2-thumb.jpg" alt="product desc"/>
                                        </a>
                                    </div>    */}
                                    </div>
                                </div>

                                <div className="product product-7 text-center">
                                    <figure className="product-media">

                                        <img src={product4} alt="product" className="product-image" />
                                        <img src={product4} alt="product" className="product-image-hover" />


                                        <div className="product-action-vertical">
                                            <span className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></span>
                                        </div>

                                        <div className="product-action">
                                            <span className="btn-product btn-cart"><span>add to cart</span></span>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 className="product-title"><a href="/">Denim jacket</a></h3>
                                        <div className="product-price">
                                            $19.99
                                    </div>

                                        {/* <div className="product-nav product-nav-thumbs">
                                        <a  href ="/" className="active">
                                            <img src="assets/images/demos/demo-6/products/product-1-thumb.jpg" alt="product desc"/>
                                        </a>
                                        <a  href ="/">
                                            <img src="assets/images/demos/demo-6/products/product-1-2-thumb.jpg" alt="product desc"/>
                                        </a>
                                        <a  href ="/">
                                            <img src="assets/images/demos/demo-6/products/product-1-3-thumb.jpg" alt="product desc"/>
                                        </a>
                                    </div>    */}
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>

                    <div className="tab-pane p-0 fade" id="trending-women-tab" role="tabpanel" aria-labelledby="trending-women-link">
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl">
                            <OwlCarousel {...owl_options}>
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-sale">sale</span>

                                        <img src={product3} alt="product" className="product-image" />
                                        <img src={product3} alt="product" className="product-image-hover" />


                                        <div className="product-action-vertical">
                                            <span className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></span>
                                        </div>

                                        <div className="product-action">
                                            <span className="btn-product btn-cart"><span>add to cart</span></span>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 className="product-title"><a href="/">Printed sweatshirt</a></h3>
                                        <div className="product-price">
                                            <span className="new-price">Now $7.99</span>
                                            <span className="old-price">Was $12.99</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="product product-7 text-center">
                                    <figure className="product-media">

                                        <img src={product5} alt="product" className="product-image" />
                                        <img src={product6} alt="product" className="product-image-hover" />


                                        <div className="product-action-vertical">
                                            <span className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></span>
                                        </div>

                                        <div className="product-action">
                                            <span className="btn-product btn-cart"><span>add to cart</span></span>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 className="product-title"><a href="/">Linen-blend paper bag trousers</a></h3>
                                        <div className="product-price">
                                            $17.99
                                    </div>

                                        {/* <div className="product-nav product-nav-thumbs">
                                            <a href="/" className="active">
                                                <img src="assets/images/demos/demo-6/products/product-4-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="/" >
                                                <img src="assets/images/demos/demo-6/products/product-4-2-thumb.jpg" alt="product desc" />
                                            </a>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="product product-7 text-center">
                                    <figure className="product-media">

                                        <img src={product1} alt="product" className="product-image" />
                                        <img src={product1} alt="product" className="product-image-hover" />


                                        <div className="product-action-vertical">
                                            <span className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></span>
                                        </div>

                                        <div className="product-action">
                                            <span className="btn-product btn-cart"><span>add to cart</span></span>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 className="product-title"><a href="/">Denim jacket</a></h3>
                                        <div className="product-price">
                                            $19.99
                                    </div>

                                        {/* <div className="product-nav product-nav-thumbs">
                                            <a href="/" className="active">
                                                <img src="assets/images/demos/demo-6/products/product-1-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="/">
                                                <img src="assets/images/demos/demo-6/products/product-1-2-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="/">
                                                <img src="assets/images/demos/demo-6/products/product-1-3-thumb.jpg" alt="product desc" />
                                            </a>

                                        </div> */}
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>

                    </div>

                    <div className="tab-pane p-0 fade" id="trending-men-tab" role="tabpanel" aria-labelledby="trending-men-link">
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl">

                            <OwlCarousel {...owl_options}>
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-sale">sale</span>

                                        <img src={product3} alt="product" className="product-image" />
                                        <img src={product3} alt="product" className="product-image-hover" />


                                        <div className="product-action-vertical">
                                            <span className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></span>
                                        </div>

                                        <div className="product-action">
                                            <a href="/" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 className="product-title"><a href="/">Printed sweatshirt</a></h3>
                                        <div className="product-price">
                                            <span className="new-price">Now $7.99</span>
                                            <span className="old-price">Was $12.99</span>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>

                    </div>
                </div>

            </div>


        </div>


    )
}

export default TrendingCarousel

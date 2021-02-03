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
            <div class="mb-5"></div>
            <div class="container">
                <div class="heading heading-center mb-3">
                    <h2 class="title">Trending</h2>

                    <ul class="nav nav-pills justify-content-center" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="trending-all-link" data-toggle="tab" href="#trending-all-tab" role="tab" aria-controls="trending-all-tab" aria-selected="true">All</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="trending-women-link" data-toggle="tab" href="#trending-women-tab" role="tab" aria-controls="trending-women-tab" aria-selected="false">Women</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="trending-men-link" data-toggle="tab" href="#trending-men-tab" role="tab" aria-controls="trending-men-tab" aria-selected="false">Men</a>
                        </li>
                    </ul>
                </div>


                <div class="tab-content tab-content-carousel">
                    <div class="tab-pane p-0 fade show active" id="trending-all-tab" role="tabpanel" aria-labelledby="trending-all-link">
                        <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl">

                            <OwlCarousel {...owl_options} >

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src={product1} alt="Product" class="product-image" />
                                            <img src={product1} alt="Product" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="/" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="/" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 class="product-title"><a href="product.html">Denim jacket</a></h3>
                                        <div class="product-price">
                                            $19.99
                                    </div>

                                        {/* <div class="product-nav product-nav-thumbs">
                                        <a  href ="/" class="active">
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

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src={product2} alt="Product " class="product-image" />
                                            <img src={product2} alt="Product " class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="/" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="/" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="/">Shoes</a>
                                        </div>
                                        <h3 class="product-title"><a href="product.html">Sandals</a></h3>
                                        <div class="product-price">
                                            $24.99
                                    </div>
                                    </div>
                                </div>

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <span class="product-label label-sale">sale</span>
                                        <a href="product.html">
                                            <img src={product3} alt="Product" class="product-image" />
                                            <img src={product3} alt="Product" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="/" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="/" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 class="product-title"><a href="product.html">Printed sweatshirt</a></h3>
                                        <div class="product-price">
                                            <span class="new-price">Now $7.99</span>
                                            <span class="old-price">Was $12.99</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src={product5} alt="product" class="product-image" />
                                            <img src={product5} alt="product" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="/" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="/" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 class="product-title"><a href="product.html">Linen-blend paper bag trousers</a></h3>
                                        <div class="product-price">
                                            $17.99
                                    </div>

                                        {/* <div class="product-nav product-nav-thumbs">
                                        <a  href ="/" class="active">
                                            <img src="assets/images/demos/demo-6/products/product-4-thumb.jpg" alt="product desc"/>
                                        </a>
                                        <a  href ="/">
                                            <img src="assets/images/demos/demo-6/products/product-4-2-thumb.jpg" alt="product desc"/>
                                        </a>
                                    </div>    */}
                                    </div>
                                </div>

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src={product4} alt="product" class="product-image" />
                                            <img src={product4} alt="product" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="/" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="/" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 class="product-title"><a href="product.html">Denim jacket</a></h3>
                                        <div class="product-price">
                                            $19.99
                                    </div>

                                        {/* <div class="product-nav product-nav-thumbs">
                                        <a  href ="/" class="active">
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

                    <div class="tab-pane p-0 fade" id="trending-women-tab" role="tabpanel" aria-labelledby="trending-women-link">
                        <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl">
                            <OwlCarousel {...owl_options}>
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <span class="product-label label-sale">sale</span>
                                        <a href="product.html">
                                            <img src={product3} alt="product" class="product-image" />
                                            <img src={product3} alt="product" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="/" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="/" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 class="product-title"><a href="product.html">Printed sweatshirt</a></h3>
                                        <div class="product-price">
                                            <span class="new-price">Now $7.99</span>
                                            <span class="old-price">Was $12.99</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src={product5} alt="product" class="product-image" />
                                            <img src={product6} alt="product" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="/" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="/" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 class="product-title"><a href="product.html">Linen-blend paper bag trousers</a></h3>
                                        <div class="product-price">
                                            $17.99
                                    </div>

                                        {/* <div class="product-nav product-nav-thumbs">
                                            <a href="/" class="active">
                                                <img src="assets/images/demos/demo-6/products/product-4-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="/" >
                                                <img src="assets/images/demos/demo-6/products/product-4-2-thumb.jpg" alt="product desc" />
                                            </a>
                                        </div> */}
                                    </div>
                                </div>

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src={product1} alt="product" class="product-image" />
                                            <img src={product1} alt="product" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="/" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="/" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="/">Clothing</a>
                                        </div>
                                        <h3 class="product-title"><a href="product.html">Denim jacket</a></h3>
                                        <div class="product-price">
                                            $19.99
                                    </div>

                                        {/* <div class="product-nav product-nav-thumbs">
                                            <a href="/" class="active">
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

                    <div class="tab-pane p-0 fade" id="trending-men-tab" role="tabpanel" aria-labelledby="trending-men-link">
                        <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl">

                        <OwlCarousel {...owl_options}>
                            <div class="product product-7 text-center">
                                <figure class="product-media">
                                    <span class="product-label label-sale">sale</span>
                                    <a href="product.html">
                                        <img src={product3} alt="product" class="product-image" />
                                        <img src={product3} alt="product" class="product-image-hover" />
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="/" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>

                                    <div class="product-action">
                                        <a href="/" class="btn-product btn-cart"><span>add to cart</span></a>
                                    </div>
                                </figure>

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="/">Clothing</a>
                                    </div>
                                    <h3 class="product-title"><a href="product.html">Printed sweatshirt</a></h3>
                                    <div class="product-price">
                                        <span class="new-price">Now $7.99</span>
                                        <span class="old-price">Was $12.99</span>
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

import React from 'react'
// Images
import product1 from '../../assets/images/demos/demo-6/deal/bg-1.jpg'
import product2 from '../../assets/images/demos/demo-6/deal/product-2.jpg'
import  product3 from '../../assets/images/demos/demo-6/deal/product-1.jpg'

const Promotion = () => {
    return (
        <div>
            <div class="mb-5"></div>

            <div class="deal bg-image pt-8 pb-8" style={{ backgroundImage: `url(${product1})` }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-12 col-md-8 col-lg-6">
                            <div class="deal-content text-center">
                                <h4>Limited quantities. </h4>
                                <h2>Deal of the Day</h2>
                                <div class="deal-countdown" data-until="+10h"></div>
                            </div>
                            <div class="row deal-products">
                                <div class="col-6 deal-product text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src={product3} alt="Product" class="product-image" />
                                        </a>
                                    </figure>

                                    <div class="product-body">
                                        <h3 class="product-title"><a href="product.html">Elasticated cotton shorts</a></h3>
                                        <div class="product-price">
                                            <span class="new-price">Now $24.99</span>
                                            <span class="old-price">Was $30.99</span>
                                        </div>
                                    </div>
                                    <span class="action">shop now</span>
                                </div>
                                <div class="col-6 deal-product text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src={product2} alt="Product" class="product-image" />
                                        </a>
                                    </figure>

                                    <div class="product-body">
                                        <h3 class="product-title"><a href="product.html">Fine-knit jumper</a></h3>
                                        <div class="product-price">
                                            <span class="new-price">Now $8.99</span>
                                            <span class="old-price">Was $17.99</span>
                                        </div>
                                    </div>
                                    <span class="action">shop now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Promotion

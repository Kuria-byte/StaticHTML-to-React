import React from 'react'
import product1 from '../../assets/images/demos/demo-6/products/product-1-1.jpg'

const ShopItem = () => {
  return (

    <div className='product product-7 text-center'>
      <figure className='product-media'>
        <img src={product1} alt='Product' className='product-image' />
        <img src={product1} alt='Product' className='product-image-hover' />
        <div className='product-action-vertical'>
          <span className='btn-product-icon btn-wishlist btn-expandable'><span>add to wishlist</span></span>
        </div>
        <div className='product-action'>
          <span className='btn-product btn-cart'><span>add to cart</span></span>
        </div>
      </figure>
      <div className='product-body'>
        <div className='product-cat'>
          <span>Clothing</span>
        </div>
        <h3 className='product-title'><a href='/'>Denim jacket</a></h3>
        <div className='product-price'>
          $19.99
        </div>
      </div>
    </div>


  )
}

export default ShopItem

import React from 'react'
import ShopProduct from './shop-product'



const Collectiondummy = ({ id, title, items }) => {
    return (
        
        items.filter((item,index) => index<10).map((item) => (
            <ShopProduct key={item.id} item={item} title={title} />
  
          ))

    
    )
}

export default Collectiondummy

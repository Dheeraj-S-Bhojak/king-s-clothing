import { useState, useEffect } from 'react';
import "./CollectionPreview.styles.scss"
import ProductItems from '../productItems/ProductItems.components';

const CollectionPreview = () => {
   const [shopMenu, setShopMenu] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3005/api/products/all/shop")
      .then((response) => response.json())
      .then((shopMenu) => {
        setShopMenu(shopMenu.data);
      })
  }, []);
    <div className='collection-page'> 
      <div className="items">
        {shopMenu.map((menus) => (
          <>
            <h2 className='title'>{menus._id}</h2>
            {menus.items.map((item) => (
              <ProductItems key={item._id} hats={item} />
            ))}
          </>  
        ))}    
      </div>
    </div>
}

export default CollectionPreview;
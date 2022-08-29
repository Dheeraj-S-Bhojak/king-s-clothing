
import "./Shop.styles.scss"
import { useState, useEffect } from 'react';
import ProductItems from '../../components/productItems/ProductItems.components';

const Shop = () => {
  const [shopMenu, setShopMenu] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3005/api/products/all/shop")
      .then((response) => response.json())
      .then((shopMenu) => {
        setShopMenu(shopMenu.data);
      })
  }, []);
  return (
    <div className="collections-overview">
      {shopMenu.map((menus) => (
        <div className="collection-preview">
          <h2 className='title'>{menus._id}</h2 >
          <div className="preview">
            {menus.items.map((item) => (
              <ProductItems key={item._id} hats={item} />
            ))}
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default Shop;
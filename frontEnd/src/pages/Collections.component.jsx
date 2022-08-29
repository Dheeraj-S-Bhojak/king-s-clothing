import ProductItems from '../components/productItems/ProductItems.components';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./Collections.styles.scss"



const Collections = () => {
 
  const { categoryName } = useParams();
  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:3005/api/products/shop/${categoryName}`)
      .then((response) => response.json())
      .then((productData) => {
        setProductData(productData.data);
      })
  }, [categoryName]);
    
  return (
    <div className='collection-page'>
      <h2 className='title'>{categoryName}</h2>
      <div className="items">
        {productData.map((hats) => (
         <ProductItems key={hats._id} hats={hats} />
      ))}
      </div>
    </div>
  )
};
export default Collections;

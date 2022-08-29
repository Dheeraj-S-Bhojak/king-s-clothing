import { useEffect } from 'react';
import { useState } from 'react';
import CategoryList from '../categories-list/categories-list.components';

import './Directory.style.scss';

const Directory = () => {
  
  const [categoriesArray, setCategoriesArray] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/api/categories")
      .then((response) => response.json())
      .then((categoriesArray) => {
        setCategoriesArray(categoriesArray.data);
      })
  }, []);

 
 
  return (
    <div className='directory-container'>
      {categoriesArray.map((category) => (
        <CategoryList key={category._id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
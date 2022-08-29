import "./categories-list.styles.scss";
import { Link } from 'react-router-dom';

const CategoryList = ({ category }) => {
  const { backgroundImage, categoryTitle } = category;
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{categoryTitle}</h2>
        <Link to={ `/shop/${categoryTitle}`}><p>Shop Now</p></Link>
      </div>
    </div>
  );
};

export default CategoryList;


import "./ProductItems.styles.scss";

const ProductItems = ({hats}) => {
    return (
        <>
            <div className="collection-item">
                <div className="image" style={{ backgroundImage: `url(${hats.imageUrl})` }} />
                <div className='collection-footer'>
                    <span className='name'>{hats.name}</span>
                    <span className='price'>{hats.price}</span>
                </div>
                 <button className="inverted custom-button">Add to Cart</button>
            </div>
        </>
    );
}

export default ProductItems;



import { Link } from 'react-router-dom';
import './ProductList.scss'

function ProductItem({ product }) {
    return (
        <div className="col-sm-6 col-lg-4">
            <div className="product-card text-center mb-4">
                <div className="product-img position-relative">
                    <img src={product['product_images.image_url']} alt={product.name} />
                    <ul className="product-overlay text-center d-flex justify-content-center">
                        <li className="me-1">
                            <Link to="#" className="product-icon"><i className="bi bi-search"></i></Link>
                        </li>
                        <li className="me-1">
                            <Link to="#" className="product-icon"><i className="bi bi-cart3"></i></Link>
                        </li>
                        <li>
                            <Link to="#" className="product-icon"><i className="bi bi-heart"></i></Link>
                        </li>
                    </ul>
                </div>
                <div className="product-info">
                    <p>{product['category.name']}</p>
                    <Link to="#" className="product-info-name mb-2">{product.name}</Link>
                    <p className="product-price">{product.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
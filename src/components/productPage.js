import {useParams } from 'react-router-dom';
import { products } from '../components/products.js';
import Navbar from '../components/navbar.js';

const ProductPage = () => {
    const params = useParams()
    // returns information about the product
    return (
        <div className="product-Page">
            <Navbar />
            <h1 className="product-name">{products[params.productId - 1].name}</h1>
            <img src={products[params.productId - 1].image}
            alt={products[params.productId - 1].alt}></img>
            <p>Price: R{products[params.productId - 1].price}</p>
        </div>
    )
};

export default ProductPage;
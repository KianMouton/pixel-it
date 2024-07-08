import {useParams } from 'react-router-dom';

const ProductPage = () => {
    useParams()
    return (
        <div>
            <h1>Product Page</h1>
            <p>Welcome to our product page!</p>
        </div>
    )
};

export default ProductPage;
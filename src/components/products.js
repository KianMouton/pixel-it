import Grey_Tshirt from '../images/Grey_Tshirt.jpg';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        image: Grey_Tshirt,
        type: 'shirt',
        name: "shirt",
        price: 50,
        alt: "shirt",
        description: "A great shirt",
    },
    {
        id: 2,
        image: Grey_Tshirt,
        type: 'hat',
        name: "hat",
        price: 100,
        alt: 'hat',
        description: "A great hat",
    },
    {
        id: 3,
        image: Grey_Tshirt,
        type: 'hoodie',
        name: "hoodie",
        price: 100,
        alt: 'hoodie',
        description: "A great hoodie",
    },
    {
        id: 4,
        image: Grey_Tshirt,
        type: 'sticker',
        name: "sticker",
        price: 100,
        alt: 'sticker',
        description: "A great sticker",
    },
    {
        id: 5,
        image: Grey_Tshirt,
        type: 'bag',
        name: "bag",
        price: 100,
        alt: 'bag',
        description: "A great bag",
    },
]

function Products({ showHat, showShirt, showHoodies, showStickers, showBag }) {
    console.log(showHat);

    const handleProduct = () => {
        // Add logic to handle product selection
        console.log("clicked");
    }

    if (showHat) {
        return (
            <div className="products">
                <h3 className="selected-type">Hats</h3>
                {products.filter(product => product.type === 'hat').map((product, i) => {
                    return (
                        <div onClick={() => handleProduct()} key={product.id} className="product">
                            <Link className="product-link" to={`/productPage/${product.id}`}>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt="hat"></img>
                            <p>Price: R{product.price}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    } else if (showShirt) {
        return (
            <div className="products">
                <h3 className="selected-type">Shirts</h3>
                {products.filter(product => product.type ==='shirt').map((product, i) => {
                    return (
                        <div onClick={() => handleProduct()} key={product.id} className="product">
                            <Link className="product-link" to={`/productPage/${product.id}`}>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt="shirt"></img>
                            <p>Price: R{product.price}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    } else if (showHoodies) {
        return (
            <div className="products">
                <h3 className="selected-type">Hoodies</h3>
                {products.filter(product => product.type === 'hoodie').map((product, i) => {
                    return (
                        <div onClick={() => handleProduct()} key={product.id} className="product">
                            <Link className="product-link" to={`/productPage/${product.id}`}>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt="hoodie"></img>
                            <p>Price: R{product.price}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    } else if (showStickers) {
        return (
            <div className="products">
                <h3 className="selected-type">Stickers</h3>
                {products.filter(product => product.type === 'sticker').map((product, i) => {
                    return (
                        <div onClick={() => handleProduct()} key={product.id} className="product">
                            <Link className="product-link" to={`/productPage/${product.id}`}>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt="sticker"></img>
                            <p>Price: R{product.price}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    } else if (showBag) {
        return (
            <div className="products">
                <h3 className="selected-type">Bags</h3>
                {products.filter(product => product.type === 'bag').map((product, i) => {
                    return (
                        <div onClick={() => handleProduct()} key={product.id} className="product">
                            <Link className="product-link" to={`/productPage/${product.id}`}>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt="bag"></img>
                            <p>Price: R{product.price}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div>
                <div className="products">
                    {products.map((product, i) => {
                        return (
                            <div key={product.id} className="product">
                                <Link className="product-link" to={`/productPage/${product.id}`}>
                                <h3>{product.name}</h3>
                                <img src={product.image} alt="shirt"></img>
                                <p>Price: R{product.price}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Products;
export { products };

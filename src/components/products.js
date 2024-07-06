import Grey_Tshirt from '../images/Grey_Tshirt.jpg';

const products = [
    {
        id: 1,
        image: Grey_Tshirt,
        type: 'shirt',
        name: "shirt",
        price: 50,
    },
    {
        id: 2,
        image: Grey_Tshirt,
        type: 'hat',
        name: "hat",
        price: 100,
    },
    {
        id: 3,
        image: Grey_Tshirt,
        type: 'hoodie',
        name: "hoodie",
        price: 100,
    },
    {
        id: 4,
        image: Grey_Tshirt,
        type: 'sticker',
        name: "sticker",
        price: 100,
    },
    {
        id: 5,
        image: Grey_Tshirt,
        type: 'bag',
        name: "bag",
        price: 100,
    },
]

function Products({ showHat, showShirt, showHoodies, showStickers, showBag }) {

    console.log(showHat);

    if (showHat) {
        return (
            <div className="products">
                <h3 className="selected-type">Hats</h3>
                {products.filter(product => product.type === 'hat').map((product, i) => {
                    return (
                        <div key={product.id} className="product">
                            <h3>{product.name}</h3>
                            <img src={product.image} alt="hat"></img>
                            <p>Price: ${product.price}</p>
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
                        <div key={product.id} className="product">
                            <h3>{product.name}</h3>
                            <img src={product.image} alt="shirt"></img>
                            <p>Price: ${product.price}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="products">
                    {products.map((product, i) => {
                        return (
                            <div key={product.id} className="product">
                                <h3>{product.name}</h3>
                                <img src={product.image} alt="shirt"></img>
                                <p>Price: ${product.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            )
        }
    }

export default Products;
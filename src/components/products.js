const products = [
    {
        id: 1,
        name: "shirt",
        price: 50,
    },
    {
        id: 2,
        name: "hat",
        price: 100,
    }
]

function Products() {
    return (
        <div>
            <p>this is products lol</p>
            <div className="products">
                {products.map((product, i) => {
                    return (
                        <div key={product.id} className="product">
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products;
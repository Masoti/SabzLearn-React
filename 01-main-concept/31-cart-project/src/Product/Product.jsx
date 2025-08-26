import './Product.css'

function Product() {
    return (
        <div>
            <h2>Product Card</h2>
            <div className="card">
                <img src="11.png" alt=""/>
                <h1>Samsung A51</h1>
                <p className="price">$300</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi et commodi placeat magnam temporibus deserunt quibusdam tempora inventore quod.</p>
                <p>
                    <button>Add To Cart</button>
                </p>
            </div>
        </div>
    )
}

export default Product
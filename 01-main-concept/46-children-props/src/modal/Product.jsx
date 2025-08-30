import React from 'react'
import './Product.css'

export default function Product({title: productTitle, image, price, children}) {

    let title =  'Product Card'
    
    return (
        <div>
            <h2>{title}</h2>
            <div className="card">
                <img src={image} alt="Denim Jeans"/>
                <h1>{productTitle}</h1>
                <p className="price">${price}</p>
                <p>Some text about the jeansSuper slim and comfy lorem ipsum jeansum.Lorem jeamsum denim lorem jeansum.</p>
                {children}
                <p>
                    <button>Add To Cart</button>
                </p>
            </div>
        </div>
    )
}
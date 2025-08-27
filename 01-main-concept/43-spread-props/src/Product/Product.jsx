import React from 'react'
import './Product.css'

export default function Product({title, image, price}) {
    
    // console.log(props)

    // let {title, image, price} = props
    return (
        <div>
            <h2>Product Card</h2>
            <div className="card">
                <img src={image} alt="Denim Jeans"/>
                <h1>{title}</h1>
                <p className="price">${price}</p>
                <p>Some text about the jeansSuper slim and comfy lorem ipsum jeansum.Lorem jeamsum denim lorem jeansum.</p>
                <p>
                    <button>Add To Cart</button>
                </p>
            </div>
        </div>
    )
}
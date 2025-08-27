import React from 'react'
import './Product.css'

export default function Product(props) {
    console.log(props)
    // console.log(typeof props.price)

    if (props.count > 0) {
        return (
            <div>
                <h2>Product Card</h2>
                <div className="card">
                    <img src={props.image} alt="Denim Jeans"/>
                    <h1>{props.title}</h1>
                    <p className="price">${props.price}</p>
                    <p>Some text about the jeansSuper slim and comfy lorem ipsum jeansum.Lorem jeamsum denim lorem jeansum.</p>
                    <p>
                        <button>Add To Cart</button>
                    </p>
                </div>
            </div>
    )
    } 
    // else {
    //     return null
    // }
    return null

    // return (
    //     props.count &&
    //     <div>
    //         <h2>Product Card</h2>
    //         <div className="card">
    //             <img src={props.image} alt="Denim Jeans"/>
    //             <h1>{props.title}</h1>
    //             <p className="price">${props.price}</p>
    //             <p>Some text about the jeansSuper slim and comfy lorem ipsum jeansum.Lorem jeamsum denim lorem jeansum.</p>
    //             <p>
    //                 <button>Add To Cart</button>
    //             </p>
    //         </div>
    //     </div>
    // )
}
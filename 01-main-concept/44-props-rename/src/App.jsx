import React from 'react'
import Product from './Product/Product'
import './App.css'

function App() {

  const allProducts = [
    {id: 1, title: 'Asus', image: 'images/laptop1.jpg', price: 1399, count:12},
    {id: 2, title: 'Toshiba', image: 'images/laptop2.jpg', price: 2599, count:1},
    {id: 3, title: 'Lenovo', image: 'images/laptop3.jpg', price: 1299, count:31},
  ]

  return (
    <div className='container'>
        <Product {...allProducts[0]}/>
        <Product {...allProducts[1]}/>
        <Product {...allProducts[2]}/>
    </div>
  )
}

export default App
import React from 'react'
import Product from './Product/Product'
import './App.css'

export default function App() {
  return (
    <div className='container'>
        <Product title='Asus' image='images/laptop1.jpg' price={1399}/>
        <Product title='Toshiba' image='images/laptop2.jpg' price={2599}/>
        <Product title='Lenovo' image='images/laptop3.jpg' price={1299}/>
    </div>
  )
}
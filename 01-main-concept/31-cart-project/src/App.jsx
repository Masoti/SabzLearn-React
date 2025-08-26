import { useState } from 'react'
import Product from './Product/Product'
import './App.css'

export default function App() {
  return (
    <div className='container'>
        <Product />
        <Product />
        <Product />
    </div>
  )
}
import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <h1>2 + 3 + 10</h1>
      <h1>{2 + 3 + 10}</h1>
      <h1>{Math.pow(2, 3)}</h1>
      <p><strong>What is JSX? </strong>

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like markup directly within your JavaScript code. JSX is a declarative way to describe what the user interface should look like, especially in libraries like React.

While it looks like HTML, it's not. It's "syntactic sugar" for React.createElement() function calls (or similar functions in newer React versions). A browser cannot understand JSX directly; it must be "transpiled" (transformed) into regular JavaScript before it can be run.</p>
      
      <h3>Rules for Using JSX (JSX is syntatic suger)</h3>
      <p>1- Single Root Element: : All JSX elements within a component must be wrapped in a single parent element.</p>
      <p>2- Use className instead of class</p>
      <p>3- Use camelCase for attributes</p>
      <p>4- Close All Tags</p>
      <p>5- Embed JavaScript Expressions with Curly Braces</p>
      <p>6- Component Naming Convention</p> 
    </div>
  )
}


export default App

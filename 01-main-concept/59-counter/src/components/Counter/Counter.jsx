import React, { Component } from 'react'
import './Counter.css'

export default class Counter extends Component {
  render() {
    return (
      <div>
        <section id='main'>
            <div className='container'>
                <h2 id="title">Counter</h2>
                <h3 id="counter">0</h3>
                <div className="btn-container">
                    <button id='add' onClick='add()'>Add Count</button>
                    <button id='lower' onClick='lower()'>Lower Count</button>
                </div>
            </div>
        </section>
      </div>
    )
  }
}

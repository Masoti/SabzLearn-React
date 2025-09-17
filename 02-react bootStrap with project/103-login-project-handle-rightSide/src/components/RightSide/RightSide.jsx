import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

export default class RightSide extends Component {
  render() {
    return (
      <div>
        <Image src='src/assets/counts-img.jpg' thumbnail style={{border: 'none'}}/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './Modal.css'

export default class Modal extends Component {
    render() {
      return (
        <div>
            <div className='cd-popup is-visible' role='alert'>
                <div className='cd-popup-container'>
                  <p>{this.props.message}</p>
                  <ul className="cd-buttons">
                      <li><a href="#0">لغو</a></li>
                      <li><a href="#0">تایید</a></li>
                  </ul>
                  <a href="#0" className="cd-popup-close">×</a>
                </div>
            </div>
        </div>
      )
    }
}

Modal.defaultProps = {
  message: 'شما با موفقیت وارد پنل کاربریتان شدید'
}
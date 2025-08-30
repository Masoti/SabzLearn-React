import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    render() {
      return (
        <div>
            <div className='cd-popup is-visible' role='alert'>
                <div className='cd-popup-container'>

                  {this.props.children}

                  <a href="#0" className="cd-popup-close">×</a>
                </div>
            </div>
        </div>
      )
    }
}
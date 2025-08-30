import React from 'react'
import './Modal.css'

export default function Modal({ children }) {
    return (
        <div>
            <div className='cd-popup is-visible' role='alert'>
                <div className='cd-popup-container'>
                    {children}
                </div> 
            </div>
        </div>
    )
}
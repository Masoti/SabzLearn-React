import React from 'react';
import Modal from './modal/Modal';

function App() {
  return (
    <div className='container'>
      <Modal>
        <p> پرداخت شما با موفقیت انجام شد 😊</p>
        <ul className="cd-buttons">
          <li><a href="#0">تایید</a></li>
          <li><a href="#0">برگشت</a></li>
        </ul>
        <a href="#0" className="cd-popup-close">×</a>
      </Modal>
    </div>
  );
}

export default App;
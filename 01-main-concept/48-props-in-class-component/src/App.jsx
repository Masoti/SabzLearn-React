import React from 'react';
import Modal from './modal/Modal';

function App() {
  return (
    <div className='container'>
        <Modal>
          <p> آیا از حذف اطمینان دارید؟ </p>
          <ul className="cd-buttons">
              <li><a href="#0">لغو</a></li>
              <li><a href="#0">تایید</a></li>
          </ul>
        </Modal>
    </div>
  );
}

export default App;
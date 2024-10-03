import React, { useState } from 'react';
import Modal from './components/modal/Modal';
import "./App.css";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const confirmCloseModal = () => {
    return new Promise((resolve) => {
      const confirmClose = window.confirm("Are you sure you want to close the modal?");
      console.log('button clicked!');
      resolve(confirmClose);
    });
  };

  return (

    <div className="app">
      <button className="open-modal-button" onClick={handleOpenModal}>Open Modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        confirmClose={confirmCloseModal}
      >
        <p>We are a software development company. We are in A Coruña (Spain).
          We like technology, open source and simple solutions.</p>
      </Modal>
    </div>
  );
};

export default App;

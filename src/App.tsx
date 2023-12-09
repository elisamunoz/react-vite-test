import { useState } from 'react'
import './App.css'
import Modal from './components/modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <button onClick={openModal}>Show Modal</button>
      <Modal 
        open={isModalOpen}
        onCancel={closeModal}
      />
    </>
  )
}

export default App

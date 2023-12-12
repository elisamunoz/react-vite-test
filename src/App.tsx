import { useState } from 'react'
import Modal from './components/modal'
import Button from './components/button'
import './App.css'

const App = () =>{
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleOnOpen = () => setIsModalOpen(true)
  const handleOnClose = () => setIsModalOpen(false)

  return (
    <div className='app-content'>
      <Button primary={true} onClick={handleOnOpen}>Show Modal</Button>
      <Modal 
        open={isModalOpen}
        text="I am a modal"
      >
        <Button
          onClick={handleOnClose}
        >
          Close Modal
        </Button>
      </Modal>
    </div>
  )
}

export default App

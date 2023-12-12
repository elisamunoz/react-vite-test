import { useState } from 'react'
import type { FC } from 'react'
import type { Meta } from '@storybook/react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../button';
import { Modal, ModalProps } from './';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  args: {
    text: 'Hi, I am a modal',
    
  },
  argTypes: {
    open: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof Modal>;

export default meta;

export const OpenModal: FC = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOnOpen = () => {
    setIsOpen(true)
  }

  const handleOnClose = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsLoading(false)
    }, 1000);
  }

  return (
    <>
      <Button
        primary
        icon={faArrowRight}
        onClick={handleOnOpen}
      >
        Show Modal
      </Button>
      <Modal 
        open={isOpen}
        text={args.text}
      >
        <Button
          onClick={handleOnClose}
          loading={isLoading}
        >
          Close Modal
        </Button>
      </Modal>
    </>
  );
};
import React from 'react';

import Modal from 'react-modal';

interface INewTransitionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransitionModal({
  isOpen,
  onRequestClose,
}: INewTransitionModalProps) {
  return (
    <Modal onRequestClose={onRequestClose} isOpen={isOpen}>
      <h2>Cadastrar Transação</h2>
    </Modal>
  );
}

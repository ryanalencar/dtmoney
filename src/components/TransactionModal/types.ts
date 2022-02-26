export interface INewTransitionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export type TransactionType = 'deposit' | 'withdraw';

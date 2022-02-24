import ReactModal from 'react-modal';
import styled from 'styled-components';

export const Modal = styled(ReactModal).attrs(({ theme }) => ({
  style: {
    overlay: {
      backgroundColor: theme.colors.backgroundModal,
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      width: '100%',
      maxWidth: '567px',
      backgroundColor: theme.colors.background,
      padding: '3rem',
      position: 'relative',
      borderRadius: theme.borderRadius,
    },
  },
}))``;

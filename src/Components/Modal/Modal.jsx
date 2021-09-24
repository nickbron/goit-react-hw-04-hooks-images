import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { ModalWindow, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal(props) {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      props.onClose();
    }
  };

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };
  return createPortal(
    <Overlay onClick={onOverlayClick}>
      <ModalWindow>{props.children}</ModalWindow>
    </Overlay>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

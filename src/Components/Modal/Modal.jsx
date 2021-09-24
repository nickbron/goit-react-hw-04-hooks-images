import React, { useEffect } from 'react';
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

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onKeyDown);
//   }

//   onKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   onOverlayClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <Overlay onClick={this.onOverlayClick}>
//         <ModalWindow>{this.props.children}</ModalWindow>
//       </Overlay>,
//       modalRoot,
//     );
//   }
// }

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };

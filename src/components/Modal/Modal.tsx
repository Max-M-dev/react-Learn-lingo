import React from 'react';
import { useEffect } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';

interface ModalProps {
  onClose: () => void;
  isShowCloseBtn?: boolean;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  isShowCloseBtn = false,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={css.modal} onClick={handleClickOutside}>
      <div className={css.modalWrapper}>
        {isShowCloseBtn && (
          <button type="button" className={css.close} onClick={onClose}>
            <svg width="32" height="32" className={css.icon}>
              <use href="./images/sprite.svg#icon-close"></use>
            </svg>
          </button>
        )}
        <div className={css.modalContent}>{children}</div>
      </div>
    </div>,
    document.getElementById('modal') as HTMLDivElement
  );
};

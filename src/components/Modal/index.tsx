import React, { FunctionComponent } from 'react';

import './Modal.scss';
import Portal from '@components/Portal';

export interface ModalProps {
  title: string;
  children?: React.ReactNode;
}

interface ModalContentProps {
  children: React.ReactNode;
}

interface ModalFooterProps {
  children: React.ReactNode;
}

export type IModal<ModalProps> = FunctionComponent<ModalProps> & {
  Content: FunctionComponent<ModalContentProps>;
  Footer: FunctionComponent<ModalFooterProps>;
};

const Modal: IModal<ModalProps> = ({ title, children }: ModalProps) => {
  return (
    <Portal portalWrapperId="modalPortal">
      <div className="modal__container">
        <h4 className="modal__title">
          <strong>{title}</strong>
        </h4>
        {children}
      </div>
    </Portal>
  );
};

const ModalContent: FunctionComponent<ModalContentProps> = ({ children }) => {
  return <div className="modal__content">{children}</div>;
};

const ModalFooter: FunctionComponent<ModalFooterProps> = ({ children }) => {
  return <div className="modal__footer">{children}</div>;
};

Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;

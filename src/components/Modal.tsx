import React, { ReactNode } from "react";
import "../styles/modal.css";

type Props = {
  title: string;
  description: string;
  children: ReactNode
};

const Modal = (props: Props) => {
  const { title, description, children } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>{children}</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-white p-6 rounded-lg w-[400px] relative border-1 border-border">
      <button
        className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-full"
        onClick={onClose}
      >
        Close
      </button>
      {children}
    </div>
  );
};

export default Modal;

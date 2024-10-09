import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const handleModalOpen = () => {
    onClose(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
      <div className="bg-white w-96 h-96 rounded-lg shadow-lg p-6 relative">
        <button
          className="absolute top-4 right-4 text-black"
          onClick={handleModalOpen}
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import { Dialog } from "@headlessui/react";
import { deleteRing } from "../hooks/useRings";
import { useNavigate } from "react-router-dom";

interface DeleteConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  ringName: string;
  ringId: number;
}

export const DeleteConfirmationDialog = ({ isOpen, onClose, ringId, ringName }: DeleteConfirmationDialogProps) => {
    const navigate = useNavigate();
    const handleDeleteRing = (id: number) => {
    deleteRing(id);
    onClose();
    navigate(0);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
          <Dialog.Title className="text-xl font-semibold text-gray-800">
            Confirmar Exclusão
          </Dialog.Title>
          
          <Dialog.Description className="mt-2 text-gray-600">
            Tem certeza de que deseja excluir o anel <strong>{ringName}</strong>? 
            Esta ação não pode ser desfeita.
          </Dialog.Description>

          <div className="mt-4 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => handleDeleteRing(ringId)}
              className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
            >
              Deletar
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
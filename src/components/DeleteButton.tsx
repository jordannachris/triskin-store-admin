interface DeleteButtonProps {
    productId: string;
    onDelete: (id: string) => void;
}

const DeleteButton = ({ productId, onDelete }: DeleteButtonProps) => {
    return (
        <button
            className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 text-xs font-semibold hover:bg-red-400 transition"
            onClick={() => onDelete(productId)}
        >
            Excluir
        </button>
    );
};

export default DeleteButton;
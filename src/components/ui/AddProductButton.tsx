export interface AddProductButtonProps {
    status: boolean;
}

const AddProductButton = ({ status }: AddProductButtonProps) => {
    return (
        <button
            className={`mt-4 sm:mt-0 sm:ml-6 px-4 py-2 rounded-lg font-semibold transition ${status
                ? "bg-fuchsia-700 text-white hover:bg-fuchsia-800"
                : "bg-gray-300 text-gray-400 cursor-not-allowed opacity-60"
                }`}
            disabled={!status}
        >
            Adicionar ao carrinho
        </button>
    );
};

export default AddProductButton;
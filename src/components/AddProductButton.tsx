export interface AddProductButtonProps {
    status: boolean;
    onClick?: () => void;
}

const AddProductButton = ({ status, onClick }: AddProductButtonProps) => {
    return (
        <div className="flex flex-col items-center mt-4 sm:mt-0 sm:ml-6">
            <button
                className={`px-4 py-2 rounded-full font-semibold text-sm transition
                    ${status
                        ? "bg-fuchsia-700 text-white hover:bg-fuchsia-800"
                        : "bg-gray-300 text-gray-400 cursor-not-allowed opacity-60"
                    }`}
                disabled={!status}
                onClick={onClick}
            >
                Adicionar ao Carrinho
            </button>
        </div>
    );
};

export default AddProductButton;
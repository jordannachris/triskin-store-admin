export interface AddProductButtonProps {
    status: boolean;
    value?: number;
    onChange?: (value: number) => void;
}

const AddProductButton = ({ status, value = 0, onChange }: AddProductButtonProps) => {
    const qtdProduto = [0, 1, 2, 3, 4];

    return (
        <div className="flex flex-col items-center mt-4 sm:mt-0 sm:ml-6">
            <span className="mr-4 text-xs text-gray-500 mb-1 text-center w-full">Add Carrinho</span>
            <select
                className={`mr-4 px-2 py-1 rounded-lg border font-semibold transition 
                    ${status
                        ? "bg-white text-fuchsia-800 border-fuchsia-700"
                        : "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed opacity-60"
                    }`}
                disabled={!status}
                value={value}
                onChange={e => onChange && onChange(Number(e.target.value))}
            >
                {qtdProduto.map(n => (
                    <option key={n} value={n}>{n}</option>
                ))}
            </select>
        </div>
    );
};

export default AddProductButton;
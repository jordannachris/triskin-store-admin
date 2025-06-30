import { useNavigate } from "react-router-dom";

interface EditButtonProps {
    productId: string;
}

const EditButton = ({ productId }: EditButtonProps) => {
    const navigate = useNavigate();

    return (
        <button
            className="px-4 py-2 rounded-lg bg-fuchsia-700 text-white text-xs font-semibold hover:bg-fuchsia-800 transition"
            onClick={() => navigate(`/cart/edit/${productId}`)}
        >
            Editar
        </button>
    );
};

export default EditButton;
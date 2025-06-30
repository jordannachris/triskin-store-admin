import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../../services/productService";
import PageTitle from "../../components/ui/PageTitle";
import { ProductInterface } from "../../interfaces/ProductInterface";
import Loader from "../../components/Loader";

const EditPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<ProductInterface | null>(null);
    const [form, setForm] = useState({ name: "", price: "", status: true });

    useEffect(() => {
        setLoading(true);
        getProducts().then((products: ProductInterface[]) => {
            const found = products.find(p => p.id === productId);
            if (found) {
                setProduct(found);
                setForm({
                    name: found.name,
                    price: found.price.toString(),
                    status: found.status,
                });
            }
        }).finally(() => setLoading(false));
    }, [productId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Exemplo de PUT (ajuste a URL conforme sua API)
        await fetch(`/api/products/${productId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...product,
                name: form.name,
                price: parseFloat(form.price),
                status: form.status,
            }),
        });
        navigate("/cart");
    };

    if (loading) return <div className="pt-32 text-center"><Loader /></div>;
    if (!product) return <div className="pt-32 text-center text-red-600">Produto não encontrado.</div>;

    return (
        <div className="pt-32 max-w-lg mx-auto">
            <PageTitle titleText="Editar Produto" />
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
                <label className="flex flex-col">
                    <span className="font-semibold mb-1">Nome</span>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                        required
                    />
                </label>
                <label className="flex flex-col">
                    <span className="font-semibold mb-1">Preço</span>
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                        min={0}
                        step="0.01"
                        required
                    />
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="status"
                        checked={form.status}
                        onChange={handleChange}
                    />
                    <span className="font-semibold">Ativo</span>
                </label>
                <button
                    type="submit"
                    className="mt-4 px-6 py-2 rounded-lg bg-fuchsia-700 text-white font-semibold hover:bg-fuchsia-800 transition"
                >
                    Salvar
                </button>
            </form>
        </div>
    );
};

export default EditPage;
import PageTitle from "../../components/ui/PageTitle";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import formatPrice from "../../utils/formatPrice";
import ProductList from "../../components/ProductList";
import { ProductInterface } from "../../interfaces/ProductInterface";
import Loader from "../../components/Loader";

const CartPage = () => {
    const { cart } = useCart();
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [loading, setLoading] = useState(true);

    // Busca todos os produtos e filtra só os que estão no carrinho
    useEffect(() => {
        setLoading(true);
        getProducts().then((allProducts: ProductInterface[]) => {
            const filtered = allProducts.filter((prod) => cart[prod.id]);
            setProducts(filtered);
        }).finally(() => setLoading(false));
    }, [cart]);

    // Calcula o total
    const total = products.reduce(
        (sum, prod) => sum + (cart[prod.id] || 0) * prod.price,
        0
    );

    return (
        <div className="pt-32 max-w-2xl mx-auto">
            <PageTitle titleText="Carrinho de Compras" />

            {loading ? (
                <Loader />
            ) : (
                <div className="w-full max-w-2xl mx-auto">
                    <ProductList products={products} isCart />

                    <div className="mt-8 flex justify-end mb-12">
                        <span className="text-xl tracking-wide font-semibold uppercase text-fuchsia-800">
                            Total: R$ {formatPrice(total)}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
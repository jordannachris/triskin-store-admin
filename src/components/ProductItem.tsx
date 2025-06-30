import productActiveImage from "../assets/images/product_active.png"
import productInactiveImage from "../assets/images/product_inactive.png";
import formatPrice from "../utils/formatPrice";
import AddButton from "./AddButton";
import { ProductInterface } from "../interfaces/ProductInterface";
import { useCart } from "../contexts/CartContext";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export interface ProductItemProps {
    product: ProductInterface;
    isCart?: boolean;
}

const ProductItem = ({ product, isCart = false }: ProductItemProps) => {
    const { addToCart, setProductQuantity } = useCart();
    const { id, name, price, status } = product;
    const statusText = status ? "Ativo" : "Inativo";
    const productImage = status ? productActiveImage : productInactiveImage;
    const formattedPrice = formatPrice(price);

    const borderColor = status ? "border-l-green-500" : "border-l-red-500";

    // Se for página do carrinho, não mostra borda colorida
    const cardBorder = isCart
        ? "border border-fuchsia-800"
        : `border border-fuchsia-800 border-l-8 ${borderColor}`;

    return (
        <li
            className={`flex flex-col sm:flex-row items-center mb-4 rounded-lg p-4 bg-pink-50 max-w-2xl min-h-[9rem] mx-auto ${cardBorder}`}
        >
            <ProductImage productImage={productImage} productName={name} />

            <ProductInfo productName={name} productPrice={formattedPrice} productStatus={statusText} />

            {isCart ? (
                <div className="flex flex-col gap-2 mt-4 sm:mt-0 sm:ml-6">
                    <EditButton productId={id} />
                    <DeleteButton productId={id} onDelete={id => setProductQuantity(id, 0)} />
                </div>
            ) : (
                <AddButton
                    status={status}
                    onClick={() => addToCart(id)}
                />
            )}
        </li>
    );
}

export default ProductItem;
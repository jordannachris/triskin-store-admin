import productActiveImage from "../assets/images/product_active.png"
import productInactiveImage from "../assets/images/product_inactive.png";
import formatPrice from "../utils/formatPrice";
import { ProductInterface } from "./ProductList";
import AddProductButton from "./ui/AddProductButton";

export interface ProductItemProps {
    product: ProductInterface;
}

const ProductItem = ({ product }: ProductItemProps) => {
    const { name, price, status } = product;
    const statusText = status ? "Ativo" : "Inativo";
    const productImage = status ? productActiveImage : productInactiveImage;
    const borderColor = status ? "border-l-green-500" : "border-l-red-500";
    const formattedPrice = formatPrice(price);

    return (
        <li
            className={`flex flex-col sm:flex-row items-center mb-4 border border-fuchsia-800 rounded-lg p-4 bg-pink-50 border-l-8 ${borderColor} max-w-2xl min-h-[9rem] mx-auto`}
        >
            <div className="w-16 h-16 mx-4 flex-shrink-0 mb-4 sm:mb-0">
                <img src={productImage} alt={name} className="object-contain w-full h-full" />
            </div>

            <div className="ml-2 w-full">
                <p className="break-words max-w-full">
                    <span className="font-semibold text-fuchsia-800">Nome do produto:</span>
                    <span className="text-violet-900 ml-1">{name}</span>
                </p>
                <p className="break-words max-w-full">
                    <span className="font-semibold text-fuchsia-800">Preço:</span>
                    <span className="text-violet-900 ml-1">R$ {formattedPrice}</span>
                </p>
                <p className="break-words max-w-full">
                    <span className="font-semibold text-fuchsia-800">Status:</span>
                    <span className="text-violet-900 ml-1">{statusText}</span>
                </p>
            </div>

            <AddProductButton status={status} />
        </li>
    );
}

export default ProductItem;
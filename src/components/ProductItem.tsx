import productActiveImage from "../assets/images/product_active.png"
import productInactiveImage from "../assets/images/product_inactive.png";

interface ProductInterface {
    id: string;
    name: string;
    price: number;
    status: boolean;
}

interface ProductItemProps {
    product: ProductInterface;
}

const ProductItem = ({ product }: ProductItemProps) => {
    const { name, price, status } = product;
    const statusText = status ? "Ativo" : "Inativo";
    const productImage = status ? productActiveImage : productInactiveImage;

    return (
        <li className="flex items-center mb-4 border border-fuchsia-800 rounded-lg p-4 bg-pink-50">
            <div>
                <img src={productImage} alt={name} className="w-16 h-16 object-contain mx-4" />
            </div>

            <div>
                <p>Nome do produto: {name}</p>
                <p>Preço: R$ {price}</p>
                <p>Status: {statusText}</p>
            </div>
        </li>
    );
}

export default ProductItem;
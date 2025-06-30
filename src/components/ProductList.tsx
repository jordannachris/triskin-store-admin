
import { ProductInterface } from "../interfaces/ProductInterface";
import ProductItem from "./ProductItem";

export interface ProductListProps {
    products: ProductInterface[];
    isCart?: boolean;
}


const ProductList = ({ products, isCart = false }: ProductListProps) => {

    return (
        <div className="container mx-auto px-4">
            <ul>
                {products.map((item) => (
                    <ProductItem key={item.id} product={item} isCart={isCart} />
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
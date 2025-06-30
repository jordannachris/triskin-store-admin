
import { ProductInterface } from "../interfaces/ProductInterface";
import ProductItem from "./ProductItem";

export interface ProductListProps {
    products: ProductInterface[];
}


const ProductList = ({ products }: ProductListProps) => {

    return (
        <div className="container mx-auto px-4">
            <ul>{products.map((item) => <ProductItem product={item} key={item.id} />)}</ul>
        </div>
    );
}

export default ProductList;
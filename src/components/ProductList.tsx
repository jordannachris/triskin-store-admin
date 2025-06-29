
import ProductItem from "./ProductItem";

interface ProductInterface {
    id: string;
    name: string;
    price: number;
    status: boolean;
}

interface ProductsListInterface  {
    products: ProductInterface[];
}


const ProductList = ({ products }: ProductsListInterface) => {

    return (
        <ul>{products.map((item) => <ProductItem product={item} key={item.id} />)}</ul>
    );
}

export default ProductList;

import ProductItem from "./ProductItem";

interface ProductInterface {
    id: string;
    name: string;
    price: number;
    status: boolean;
}

interface ProductsListInterface {
    products: ProductInterface[];
}


const ProductList = ({ products }: ProductsListInterface) => {

    return (
        <div className="container mx-auto px-4">
            <ul>{products.map((item) => <ProductItem product={item} key={item.id} />)}</ul>
        </div>
    );
}

export default ProductList;
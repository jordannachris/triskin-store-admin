import { getProducts } from "../../services/productService";

export async function loader() {
    try {
        const productsList  = await getProducts();
        console.log("Products List do LOADER:", productsList);
        return productsList ?? null;
    } catch (e) {
        return null;
    }
}
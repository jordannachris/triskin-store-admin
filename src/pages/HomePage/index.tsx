import ProductList from "../../components/ProductList";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import Loader from "../../components/Loader";

interface ProductInterface {
  id: string;
  name: string;
  price: number;
  status: boolean;
}

const HomePage = () => {
  const [productsData, setProductsData] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setProductsData)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-center text-xl font-semibold text-fuchsia-800 my-8">
        Listagem de Produtos
      </h1>

      {loading ? <Loader /> : <ProductList products={productsData} />}
    </div>
  );
};

export default HomePage;

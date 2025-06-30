import ProductList from "../../components/ProductList";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import Loader from "../../components/Loader";
import PageTitle from "../../components/ui/PageTitle";
import { ProductInterface } from "../../interfaces/ProductInterface";


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
      <PageTitle titleText="Listagem de Produtos" />

      {loading ? <Loader /> : <ProductList products={productsData} />}
    </div>
  );
};

export default HomePage;

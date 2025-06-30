import ProductList from "../../components/ProductList";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import Loader from "../../components/Loader";
import PageTitle from "../../components/ui/PageTitle";
import { ProductInterface } from "../../interfaces/ProductInterface";
import { useOutletContext } from "react-router-dom";


const HomePage = () => {
  const { search } = useOutletContext<{ search: string }>();
  const [productsData, setProductsData] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setProductsData)
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <PageTitle titleText="Listagem de Produtos" />

      {loading ? <Loader /> : <ProductList products={filteredProducts} />}
    </div>
  );
};

export default HomePage;

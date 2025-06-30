import ProductList from "../../components/ProductList";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import Loader from "../../components/ui/Loader";
import PageTitle from "../../components/ui/PageTitle";
import { ProductInterface } from "../../interfaces/ProductInterface";
import { useOutletContext } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";


const HomePage = () => {
  const { search } = useOutletContext<{ search: string }>();
  const [productsData, setProductsData] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    getProducts()
      .then(setProductsData)
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="pt-32 max-w-2xl mx-auto">
      <PageTitle titleText="Listagem de Produtos" />

      {loading ? <Loader /> : <ProductList products={filteredProducts} />}
    </div>
  );
};

export default HomePage;

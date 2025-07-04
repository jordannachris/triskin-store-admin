import { ProductInterface } from "../interfaces/ProductInterface";
import { fetchProductById, fetchProducts } from "./api/productApi";

export async function getProducts(): Promise<ProductInterface[]> {
  try {
    const response = await fetchProducts();

    if (!response.ok) {
      throw new Error('Não foi possível obter uma resposta válida do servidor');
    }

    const data = await response.json();

    // Simula um delay de 1.5 segundos (1500 ms) para testar o Loader
    await new Promise(resolve => setTimeout(resolve, 1500));

    return data;
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error);
    throw error;
  }
}

export async function getProductById(id: string): Promise<ProductInterface | undefined> {
  try {
    const response = await fetchProductById(id);

    if (!response.ok) {
      throw new Error('Não foi possível obter uma resposta válida do servidor');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Erro ao buscar o produto com o id ${id}:`, error);
    throw error;
  }
}

export async function updateProduct(id: string, data: Partial<ProductInterface>) {
    return fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}
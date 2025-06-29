// const API_URL = 'https://6860cb5f8e7486408444020d.mockapi.io/api/v1/products';
const API_URL = 'https://6860cb5f8e7486408444020d.mockapi.io/api/v1';

export async function fetchProducts() {
  // return fetch(API_URL);
   return fetch(`${API_URL}/products`);
}

export async function fetchProductById(id: string) {
  return fetch(`${API_URL}/products/${id}`);
}
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import EditPage from "./pages/EditPage";
import AppLayout from "./components/AppLayout";
import ErrorMessage from "./components/ErrorMessage";
import { CartProvider } from "./contexts/CartContext";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorMessage />,
    children: [
      { path: "/", element: <HomePage />, },
      { path: "/cart", element: <CartPage />, },
      { path: "/cart/edit/:productId", element: <EditPage /> },
    ]
  },
]);

function App() {

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import { loader as productsLoader } from "./pages/HomePage/loader";
import CartPage from "./pages/CartPage";
import EditPage from "./pages/EditPage";
import AppLayout from "./components/AppLayout";
import ErrorMessage from "./components/ErrorMessage";


const router = createBrowserRouter([
  {
    element: <AppLayout />, 
    errorElement: <ErrorMessage />,
    children: [
      // { path: "/", element: <HomePage />, loader: productsLoader },
      { path: "/", element: <HomePage />,  errorElement: <ErrorMessage />, },
      { path: "/cart", element: <CartPage /> },
      { path: "/cart/edit/:productId", element: <EditPage /> },
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import EditPage from "./pages/EditPage";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />, children: [
      { path: "/", element: <HomePage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/cart/edit/:productId", element: <EditPage /> },
      { path: "*", element: <h1>404 Not Found</h1> }
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
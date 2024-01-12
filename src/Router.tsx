import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
    errorElement: <div>404</div>,
  },
]);

export default router;

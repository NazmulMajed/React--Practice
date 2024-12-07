import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./componenets/Root/Root";
import Home from "./componenets/Home/Home";
import About from "./componenets/About/About";
import Contact from "./componenets/Contact/Contact";
import Shop from "./componenets/Shop/Shop";
import ErrorPage from "./componenets/ErrorPage/ErrorPage";
import ShowAllProducts from "./componenets/ShowAllProducts/ShowAllProducts";
import AddToCard from "./componenets/AddToCard/AddToCard";
import Setup from "./Setup/Setup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Setup></Setup>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/addToCard",
        element: <AddToCard></AddToCard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

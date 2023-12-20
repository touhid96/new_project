import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Bookdetails from "./components/Bookdetails.jsx";
import Books from "./components/Books.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/Home.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:id",
        element: <Bookdetails></Bookdetails>,
        loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      { path: "/about", element: <About></About> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

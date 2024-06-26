import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Services } from "./pages/Services";
import { SignUp } from "./pages/SignUp";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "services", element: <Services /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/Error.jsx";
import Halaman from "./Pages/Halaman.jsx";
import BerandaPage from "./Pages/BerandaPage.jsx";
import AdminDashboard from "./Pages/AdminPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Halaman></Halaman>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/beranda",
    element: <BerandaPage />,
  },

  {
    path: "/admin",
    element: <AdminDashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

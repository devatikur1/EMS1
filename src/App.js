import React from "react";
import './app.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app/AppLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

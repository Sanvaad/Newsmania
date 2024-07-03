import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Bookmark from "./pages/Bookmark";
import { Toaster } from "react-hot-toast";
import { useUser } from "./features/authentication/useUser";
import Spinner from "./ui/Spinner";

function AuthWrapper({ children }) {
  const { isLoading } = useUser();

  if (isLoading) {
    return <Spinner />;
  }

  return children;
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthWrapper>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/bookmark" element={<Bookmark />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthWrapper>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

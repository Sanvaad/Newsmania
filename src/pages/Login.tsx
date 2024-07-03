import React from "react";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { isLoading, isAuthenticated } = useUser();

  if (isLoading) {
    return <Spinner />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      <Logo />
      <h3 className="mb-10 text-[2.1rem]">Log in to your account</h3>
      <LoginForm />
    </div>
  );
}

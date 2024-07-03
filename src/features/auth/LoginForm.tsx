import { useState } from "react";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import Spinner from "../../ui/Spinner";

function LoginForm() {
  const [email, setEmail] = useState("sanvaad@example.com");
  const [password, setPassword] = useState("san123");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="email" className="text-[1.1rem] mb-2">
        Email address
      </label>
      <input
        type="email"
        id="email"
        // This makes this form better for password managers
        autoComplete="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        className="w-[20rem]   p-2 border-solid border-[2px] box-border  border-[#d7d7d7]	 outline-none mb-5 focus:outline-[#ec9898] focus:border-[#fff] box-border"
      />
      <label htmlFor="password" className="mb-1">
        Password
      </label>
      <input
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        className="w-[20rem] p-2 mb-7  border-solid border-[2px]  border-[#d7d7d7]	 outline-none focus:outline-[#ec9898] focus:border-[#fff] box-border"
      />

      <button
        className="bg-[#ff3838] py-3 rounded-[100px] text-[#fff]"
        disabled={isLoading}
      >
        {!isLoading ? "Log in" : <Spinner />}
      </button>
    </form>
  );
}

export default LoginForm;

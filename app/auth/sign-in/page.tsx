"use client";

import { signIn } from "next-auth/react";

const SignIn = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });

    if (!result?.ok) {
      alert("ورود ناموفق بود. لطفاً دوباره امتحان کنید.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">ورود به حساب کاربری</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>ایمیل</label>
            <input
              name="email"
              type="email"
              placeholder="example@example.com"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label>رمز عبور</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

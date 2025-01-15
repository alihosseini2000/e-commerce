"use client";

import { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("ثبت‌نام با موفقیت انجام شد! لطفاً وارد شوید.");
    } else {
      alert("ثبت‌نام ناموفق بود. لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">ثبت‌نام</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>ایمیل</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="example@example.com"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label>رمز عبور</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md"
          >
            ثبت‌نام
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

"use client";

import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signin/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      alert("لینک تأیید برای ایمیل شما ارسال شد.");
    } else {
      alert("مشکلی رخ داد. لطفاً دوباره امتحان کنید.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">ثبت‌نام با ایمیل</h1>
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            className="w-full p-2 border rounded-md mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md"
          >
            ارسال لینک تأیید
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

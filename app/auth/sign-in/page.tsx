"use client";

import { useEffect, useState } from "react";
import { signIn, getProviders } from "next-auth/react";

const SignInPage = () => {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">ورود به حساب کاربری</h1>
        {providers &&
          Object.values(providers).map((provider: any) => (
            <button
              key={provider.name}
              onClick={() =>
                signIn(provider.id, { callbackUrl: "/" })
              }
              className="w-full bg-blue-500 text-white py-2 rounded-md mb-2"
            >
              ورود با {provider.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default SignInPage;

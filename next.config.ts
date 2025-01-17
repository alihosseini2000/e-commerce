import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['storage.googleapis.com/fir-auth-1c3bc.appspot.com',
      'storage.googleapis.com/fir-auth-1c3bc.appspot.com/',
      'storage.googleapis.com',
      'fir-auth-1c3bc.appspot.com'
    ],
  }
};

export default nextConfig;

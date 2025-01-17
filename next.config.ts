import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    domains: ["avatars.githubusercontent.com"],
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    };
    return config;
  },
  env: {
    GITHUB_ID: "Iv23li6YeovNNk4IUzgd",
    GITHUB_SECRET: "H/gHMsG6QiIccQkua9yQM9GSl2+4qTL57IH6t7CbyT0=",
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // Agar Next.js rasmi optimizatsiyasini ishlatmasa
  },
};

export default nextConfig;

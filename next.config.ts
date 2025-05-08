import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply to all paths or only specific pages like /news
        source: '/news/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
  /* config options here */

  images: {
    unoptimized: true, // Agar Next.js rasmi optimizatsiyasini ishlatmasa
    domains: ['api.olympcenter.uz'],
  },
};

export default nextConfig;

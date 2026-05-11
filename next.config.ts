import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bing.com',
        pathname: '/images/**'
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**'
      }
    ]
  }
};

export default nextConfig;

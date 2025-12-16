import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Оптимизация для продакшена
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.yandexcloud.net',
        pathname: '/firefenix/**',
      },
    ],
  },
};

export default nextConfig;

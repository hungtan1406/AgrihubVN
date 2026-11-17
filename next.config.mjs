/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cho phép fetch ảnh từ WordPress local IP (127.0.0.1 / localhost)
    dangerouslyAllowLocalIP: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // 1. Máy chủ WordPress Local
      {
        protocol: 'http',
        hostname: 'agrihub-cmslocal.local',
      },
      {
        protocol: 'http',
        hostname: '*.local',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },

      // 2. Môi trường Staging / Tunnel
      {
        protocol: 'https',
        hostname: '*.pantheonsite.io',
      },
      {
        protocol: 'https',
        hostname: '*.trycloudflare.com',
      },

      // 3. Tên miền Production
      {
        protocol: 'https',
        hostname: 'agrihub.vn',
      },
      {
        protocol: 'https',
        hostname: '*.agrihub.vn',
      },

      // 4. Ảnh đại diện mặc định WordPress (Gravatar)
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
    ],
  },
};

export default nextConfig;

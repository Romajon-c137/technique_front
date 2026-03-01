/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    return {
      beforeFiles: [
        {
          source: '/api/:path*/',
          destination: `${backendUrl}/api/:path*/`,
        },
        {
          source: '/api/:path*',
          destination: `${backendUrl}/api/:path*`,
        },
        {
          source: '/media/:path*',
          destination: `${backendUrl}/media/:path*`,
        },
      ],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.82',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;


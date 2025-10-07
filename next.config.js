/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/API',
        destination: '/api',
      },
    ];
  },
}

module.exports = nextConfig

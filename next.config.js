/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  compiler: {
    removeConsole: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
    ],
    minimumCacheTTL:1500000,
  }
}

module.exports = nextConfig

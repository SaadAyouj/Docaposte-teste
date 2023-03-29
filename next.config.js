const hostnames = [
  'raw.githubusercontent.com',
  'res.cloudinary.com']


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: hostnames.map(hostname => ({
      protocol: 'https',
      hostname
  })),
    minimumCacheTTL:1500000,
  }
}

module.exports = nextConfig

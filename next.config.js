/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'dist',
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig

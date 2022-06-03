/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  basePath: '/personal-portfolio'
}

module.exports = nextConfig

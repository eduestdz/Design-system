/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.dicebear.com']
  },
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone'
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer(nextConfig)

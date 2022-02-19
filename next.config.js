/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [('./src/styles/')]
  }
}

module.exports = nextConfig

// module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/showcase',
        destination: '/',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

// module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/showcase',
        destination: '/',
        permanent: true,
        basePath: false,
        locale: false,
      },
      // {
      //   source: '/:slug*',
      //   destination: '/',
      //   permanent: false, /* this is permanent, using temp for developing */
      //   basePath: false,
      //   locale: false,
      // },
    ]
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

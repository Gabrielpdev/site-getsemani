const withPwa =
  process.env.NODE_ENV === 'development' ? (arg) => arg : require('next-pwa');

const runtimeCaching =
  process.env.NODE_ENV === 'development' ? (arg) => arg : require('next-pwa/cache');

module.exports = withPwa({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['images.prismic.io'],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
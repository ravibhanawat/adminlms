const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  distDir: 'build',
  output: 'export',
  webpack: function (config) {
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000, // Use url-loader for smaller images
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader', // Use file-loader for fonts and SVGs
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      }
    );
    return config;
  },
});


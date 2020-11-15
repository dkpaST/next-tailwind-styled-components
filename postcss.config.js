const tailwindcss = require('tailwindcss');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';

module.exports = {
  plugins: [
    require('postcss-easy-import')({ prefix: '_' }),
    require('autoprefixer'),
    tailwindcss('./tailwind.config.js'),
    !isDev
      ? require('@fullhuman/postcss-purgecss')({
          content: [
            './src/pages/*.js',
            './src/components/*.js',
            './src/atoms/*.js',
            './src/molecules/*.js',
            './src/layouts/*.js',
          ],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        })
      : null,
    require('postcss-preset-env'),
    require('cssnano'),
  ],
};

const withCSS = require('@zeit/next-css'),
      withImages = require('next-images');

module.exports = withImages(withCSS({/* my next config */}));
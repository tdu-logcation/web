/**!
 * Next.js config.
 *
 * Copyright (C) 2021 logcation
 */

const withPWA = require('next-pwa');
const {withPlugins} = require('next-compose-plugins');
const withImages = require('next-images');
const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withPlugins([
  [
    withImages,
    {
      exclude: path.resolve('./assets/svgs'),
    },
  ],
  [
    withReactSvg,
    {
      include: path.resolve('./assets/svgs'),
    },
  ],
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        // runtimeCaching: []
      },
    },
  ],
]);

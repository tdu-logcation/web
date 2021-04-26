/**!
 * Next.js config.
 *
 * Copyright (C) 2021 logcation
 */

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    // runtimeCaching: []
  },
});

/**!
 * Next.js config.
 *
 * Copyright (C) 2021 tdu-historylog project
 */

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    // runtimeCaching: []
  },
});

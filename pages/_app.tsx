/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import type {AppProps} from 'next/app';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import {RecoilRoot} from 'recoil';
import React from 'react';
import theme from '../utils/theme';

const MyApp = ({Component, pageProps}: AppProps) => (
  <RecoilRoot>
    <ColorModeScript initialColorMode="system" />
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </RecoilRoot>
);

export default MyApp;

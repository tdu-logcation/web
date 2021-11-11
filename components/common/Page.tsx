/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import React from 'react';
import {Footer} from './Footer';
import {Flex, Box} from '@chakra-ui/react';

export const Page: React.FC = props => {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Box>{props.children}</Box>
      <Box marginTop="auto">
        <Footer />
      </Box>
    </Flex>
  );
};

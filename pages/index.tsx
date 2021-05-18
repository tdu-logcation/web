/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import React from 'react';

import Top from '../components/Top';
import {Box} from '@chakra-ui/react';
import {Page} from '../components/Page';
import {MoveIndexedDB} from '../components/moveIndexedDB';

const Index = () => {
  return (
    <Page>
      <Box margin="2.3rem 1.6rem 1rem 1.6rem">
        <MoveIndexedDB />
        <Top />
      </Box>
    </Page>
  );
};

export default Index;

/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import React from 'react';
import {Box} from '@chakra-ui/react';
import {Page} from '../components/Page';
import {Setting} from '../components/Setting';

const SettingPage = () => {
  return (
    <Page>
      <Box margin="2.3rem .1rem 1rem .1rem">
        <Setting />
      </Box>
    </Page>
  );
};

export default SettingPage;

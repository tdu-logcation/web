/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */
import {Box} from '@chakra-ui/react';
import {History} from '../components/History';
import {Page} from '../components/Page';

const HistoryPage = () => {
  return (
    <Page>
      <Box margin="2.3rem .1rem 1rem .1rem">
        <History />
      </Box>
    </Page>
  );
};

export default HistoryPage;

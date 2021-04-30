/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */
import {OtherPage} from './OtherPage';
import {DeleteData} from './settings/DeleteData';
import {ReadLog} from './settings/ReadLog';
import {Center, UnorderedList, ListItem} from '@chakra-ui/react';

export const Setting = () => {
  return (
    <OtherPage title="設定">
      <Center>
        <ReadLog />
      </Center>
      <Center margin="3rem 0 0 0">
        <DeleteData />
      </Center>
    </OtherPage>
  );
};

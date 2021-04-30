/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */
import {OtherPage} from './OtherPage';
import {DeleteData} from './settings/DeleteData';
import {Center, UnorderedList, ListItem} from '@chakra-ui/react';

export const Setting = () => {
  return (
    <OtherPage title="設定">
      <Center>
        <UnorderedList listStyleType="none">
          <ListItem>
            <DeleteData />
          </ListItem>
        </UnorderedList>
      </Center>
    </OtherPage>
  );
};

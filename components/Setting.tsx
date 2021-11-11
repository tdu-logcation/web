/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */
import {OtherPage} from './common/OtherPage';
import {DeleteData} from './settings/DeleteData';
import {ReadLog} from './settings/ReadLog';
import {
  Center,
  UnorderedList,
  ListItem,
  ListIcon,
  Link,
  Flex,
} from '@chakra-ui/react';
import {
  IoCloudUploadOutline,
  IoLogoGithub,
  IoBugOutline,
} from 'react-icons/io5';
import {HiExternalLink} from 'react-icons/hi';
import {colors} from '../utils/colors';
import ColorModeSwitch from './settings/ColorModeSwitch';

export const Setting = () => {
  return (
    <OtherPage title="設定">
      <Center>
        <UnorderedList
          width="18rem"
          fontSize="1.2rem"
          fontWeight="bold"
          margin="1rem 0 1rem 0"
          spacing="3"
          listStyleType="none"
        >
          <ListItem>
            <ListIcon
              as={IoCloudUploadOutline}
              color={colors('mainSecondly')}
            />
            別のログデータを読み込む
            <ReadLog />
          </ListItem>
          <ListItem>
            <ColorModeSwitch />
          </ListItem>
          <ListItem>
            <Flex>
              <ListIcon as={IoBugOutline} color={colors('mainSecondly')} />
              <Link
                href="https://github.com/tdu-logcation/web/issues"
                isExternal
              >
                <Flex>
                  バグ報告
                  <HiExternalLink />
                </Flex>
              </Link>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <ListIcon as={IoLogoGithub} color={colors('mainSecondly')} />
              <Link href="https://github.com/tdu-logcation/web" isExternal>
                <Flex>
                  ソースコードを見る
                  <HiExternalLink />
                </Flex>
              </Link>
            </Flex>
          </ListItem>
        </UnorderedList>
      </Center>
      <Center margin="3rem 0 0 0">
        <DeleteData />
      </Center>
    </OtherPage>
  );
};

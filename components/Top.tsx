import React from 'react';
import {
  Button,
  Flex,
  Text,
  Spacer,
  Box,
  Avatar,
  Center,
  Divider,
} from '@chakra-ui/react';
import {IoSettingsSharp} from 'react-icons/io5';
import QrCode from './QrCode';
import Link from 'next/link';

const SettingButton = ({link}: {link: string}) => (
  <Link href={link}>
    <Button
      borderRadius="2rem"
      leftIcon={<IoSettingsSharp />}
      colorScheme="blue"
      backgroundColor="#f2f2f2"
      color="#636363"
      width="6.2rem"
    >
      <Text color="black">設定</Text>
    </Button>
  </Link>
);

const UtilButton = ({title, link}: {title: string; link: string}) => (
  <Link href={link}>
    <Button
      borderRadius="1.5rem"
      width="20rem"
      backgroundColor="#f2f2f2"
      padding="1rem .5rem 1rem .5rem"
    >
      <Text>{title}</Text>
    </Button>
  </Link>
);

/**
 * トップページ
 */
const Top = () => {
  return (
    <React.Fragment>
      <Center>
        <Flex width="20rem">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar name="app icon" src="" size="sm" />
            <Text fontSize="1.3rem" fontWeight="bold" marginLeft="1.2rem">
              リレキログ
            </Text>
          </Box>
          <Spacer />
          <SettingButton link="" />
        </Flex>
      </Center>
      <QrCode />
      <Center margin="2rem 0 2rem 0">
        <Divider colorScheme="#f2f2f2" borderWidth="1px" width="20rem" />
      </Center>
      <Center margin="1rem 0 1rem 0">
        <UtilButton title="着席履歴の確認" link="" />
      </Center>
      <Center margin="1rem 0 1rem 0">
        <UtilButton title="更新履歴" link="" />
      </Center>
    </React.Fragment>
  );
};

export default Top;

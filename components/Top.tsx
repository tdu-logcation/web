import React from 'react';
import {
  Button,
  Flex,
  Text,
  Spacer,
  Box,
  Avatar,
  Center,
} from '@chakra-ui/react';
import {IoSettingsSharp} from 'react-icons/io5';
import QrCode from './QrCode';

const SettingButton = () => (
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
          <SettingButton />
        </Flex>
      </Center>
      <QrCode />
    </React.Fragment>
  );
};

export default Top;

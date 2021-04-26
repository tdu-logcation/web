/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

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
import * as colors from '../utils/colors';
import {SelectCampus} from './Campus';
import {Direct} from './Directly';
import {useRecoilState} from 'recoil';
import {useCameraState} from '../utils/recoilAtoms';

const SettingButton = ({link}: {link: string}) => (
  <Link href={link}>
    <Button
      borderRadius="2rem"
      leftIcon={<IoSettingsSharp />}
      backgroundColor={colors.buttonSecondly}
      color={colors.buttonIconSecondly}
      width="6.2rem"
    >
      <Text color={colors.textPrimary}>設定</Text>
    </Button>
  </Link>
);

const UtilButton = ({title, link}: {title: string; link: string}) => {
  const [, SetUseCamera] = useRecoilState(useCameraState);

  const qrClose = () => {
    SetUseCamera(false);
  };

  return (
    <Link href={link}>
      <Button
        borderRadius="1.5rem"
        width="20rem"
        backgroundColor={colors.buttonSecondly}
        padding="1rem .5rem 1rem .5rem"
        onClick={qrClose}
      >
        <Text color={colors.textPrimary}>{title}</Text>
      </Button>
    </Link>
  );
};
/**
 * トップページ
 */
const Top = () => {
  return (
    <React.Fragment>
      <SelectCampus />
      <Center>
        <Flex width="20rem">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar name="app icon" src="" size="sm" />
            <Text
              fontSize="1.3rem"
              fontWeight="bold"
              marginLeft="1.2rem"
              color={colors.textPrimary}
            >
              リレキログ
            </Text>
          </Box>
          <Spacer />
          <SettingButton link="" />
        </Flex>
      </Center>
      <QrCode />
      <Direct />
      <Center margin="2rem 0 2rem 0">
        <Divider colorScheme={colors.divider} borderWidth="1px" width="20rem" />
      </Center>
      <Center margin="1rem 0 1rem 0">
        <UtilButton title="着席履歴の確認" link="/history" />
      </Center>
    </React.Fragment>
  );
};

export default Top;

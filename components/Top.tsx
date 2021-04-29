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
  Box,
  Center,
  Divider,
  Image,
} from '@chakra-ui/react';
import {IoSettingsSharp} from 'react-icons/io5';
import QrCode from './QrCode';
import Link from 'next/link';
import * as colors from '../utils/colors';
import {Direct} from './Directly';
import {useRecoilState} from 'recoil';
import {useCameraState, qrReadState, logState} from '../utils/recoilAtoms';
import {tweetLink} from '../utils/formatUtil';

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

const OtherPage = ({title, link}: {title: string; link: string}) => {
  const [, SetUseCamera] = useRecoilState(useCameraState);
  const [, setQrRead] = useRecoilState(qrReadState);

  const qrClose = () => {
    SetUseCamera(false);
    setQrRead(false);
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
  const [log] = useRecoilState(logState);

  return (
    <React.Fragment>
      <Center>
        <Flex width="20rem">
          <Box display="flex" justifyContent="right">
            <Image
              src="/static/images/logcation.svg"
              htmlWidth="60%"
              htmlHeight="60%"
              alt="Logcation"
            />
          </Box>
          <Box display="flex" justifyContent="left">
            <SettingButton link="" />
          </Box>
        </Flex>
      </Center>
      <QrCode />
      <Direct />
      <Center margin="2rem 0 2rem 0">
        <Divider colorScheme={colors.divider} borderWidth="1px" width="20rem" />
      </Center>
      <Center margin="1rem 0 1rem 0">
        <OtherPage title="着席履歴の確認" link="/history" />
      </Center>
      <Center margin="1rem 0 1rem 0">
        <OtherPage title="ツイート" link={tweetLink(log)} />
      </Center>
    </React.Fragment>
  );
};

export default Top;

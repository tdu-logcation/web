/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import React from 'react';
import {
  Flex,
  Text,
  Box,
  Center,
  Divider,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import {IoSettingsSharp} from 'react-icons/io5';
import QrCode from './QrCode';
import * as colors from '../utils/colors';
import {Direct} from './Directly';
import {useRecoilState} from 'recoil';
import {logState} from '../utils/recoilAtoms';
import {tweetLink} from '../utils/formatUtil';
import {PageJump} from './OtherPage';

const SettingButton = ({link}: {link: string}) => (
  <PageJump
    buttonProps={{
      borderRadius: '2rem',
      leftIcon: <IoSettingsSharp />,
      backgroundColor: useColorModeValue(
        colors.light.buttonSecondly,
        colors.dark.buttonSecondly
      ),
      color: useColorModeValue(
        colors.light.buttonIconSecondly,
        colors.dark.buttonIconSecondly
      ),
      width: '6.2rem',
    }}
    link={link}
  >
    <Text
      color={useColorModeValue(
        colors.light.textPrimary,
        colors.dark.textPrimary
      )}
    >
      設定
    </Text>
  </PageJump>
);

const OtherPageButton = ({title, link}: {title: string; link: string}) => {
  return (
    <PageJump
      buttonProps={{
        borderRadius: '1.5rem',
        width: '20rem',
        backgroundColor: useColorModeValue(
          colors.light.buttonSecondly,
          colors.dark.buttonSecondly
        ),
        padding: '1rem .5rem 1rem .5rem',
      }}
      link={link}
    >
      <Text
        color={useColorModeValue(
          colors.light.textPrimary,
          colors.dark.textPrimary
        )}
      >
        {title}
      </Text>
    </PageJump>
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
        <Flex width="20rem" justifyContent="center" alignItems="center">
          <Box>
            <Image
              src="/static/images/logcation.svg"
              htmlWidth="70%"
              htmlHeight="70%"
              alt="Logcation"
            />
          </Box>
          <Box>
            <SettingButton link="/setting" />
          </Box>
        </Flex>
      </Center>
      <QrCode />
      <Direct />
      <Center margin="2rem 0 2rem 0">
        <Divider
          colorScheme={useColorModeValue(
            colors.light.divider,
            colors.dark.divider
          )}
          borderWidth="1px"
          width="20rem"
        />
      </Center>
      <Center margin="1rem 0 1rem 0">
        <OtherPageButton title="着席履歴の確認" link="/history" />
      </Center>
      <Center margin="1rem 0 1rem 0">
        <OtherPageButton title="ツイート" link={tweetLink(log)} />
      </Center>
    </React.Fragment>
  );
};

export default Top;

/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import React from 'react';
import {
  Flex,
  Box,
  Text,
  Spacer,
  Button,
  Center,
  ButtonProps,
  useColorModeValue,
} from '@chakra-ui/react';
import * as colors from '../utils/colors';
import {IoHomeSharp} from 'react-icons/io5';
import Link from 'next/link';
import {useRecoilState} from 'recoil';
import {useCameraState, qrReadState} from '../utils/recoilAtoms';

export const OtherPage: React.FC<{title: string}> = props => {
  return (
    <React.Fragment>
      <Center marginBottom="2rem">
        <Flex width="20rem">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Text
              fontSize="1.3rem"
              fontWeight="bold"
              marginLeft="1.2rem"
              color={useColorModeValue(
                colors.light.textPrimary,
                colors.dark.textPrimary
              )}
            >
              {props.title}
            </Text>
          </Box>
          <Spacer />
          <Link href="/">
            <Button
              borderRadius="2rem"
              leftIcon={<IoHomeSharp />}
              backgroundColor={useColorModeValue(
                colors.light.buttonSecondly,
                colors.dark.buttonSecondly
              )}
              color={useColorModeValue(
                colors.light.buttonIconSecondly,
                colors.dark.buttonIconSecondly
              )}
              width="9rem"
            >
              <Text
                color={useColorModeValue(
                  colors.light.textPrimary,
                  colors.dark.textPrimary
                )}
              >
                ホームへ戻る
              </Text>
            </Button>
          </Link>
        </Flex>
      </Center>
      {props.children}
    </React.Fragment>
  );
};

export const PageJump: React.FC<{
  link: string;
  buttonProps: ButtonProps;
}> = props => {
  const [, SetUseCamera] = useRecoilState(useCameraState);
  const [, setQrRead] = useRecoilState(qrReadState);

  const qrClose = () => {
    SetUseCamera(false);
    setQrRead(false);
  };

  return (
    <Link href={props.link}>
      <Button onClick={qrClose} {...props.buttonProps}>
        {props.children}
      </Button>
    </Link>
  );
};

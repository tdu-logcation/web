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
} from '@chakra-ui/react';
import {colors} from '../../utils/colors';
import {IoHomeSharp} from 'react-icons/io5';
import Link from 'next/link';
import {useRecoilState} from 'recoil';
import {useCameraState, qrReadState} from '../../utils/recoilAtoms';

export const OtherPage: React.FC<{
  title: string;
  size?: string;
  marginLeft?: string;
}> = props => {
  return (
    <React.Fragment>
      <Center marginBottom="2rem">
        <Flex width="20rem">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Text
              fontSize={props.size || '1.3rem'}
              fontWeight="bold"
              marginLeft={props.marginLeft || '1.2rem'}
              color={colors('textPrimary')}
            >
              {props.title}
            </Text>
          </Box>
          <Spacer />
          <Link href="/">
            <Button
              borderRadius="2rem"
              leftIcon={<IoHomeSharp />}
              backgroundColor={colors('buttonSecondly')}
              color={colors('buttonIconSecondly')}
              width="9rem"
            >
              <Text color={colors('textPrimary')}>ホームへ戻る</Text>
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

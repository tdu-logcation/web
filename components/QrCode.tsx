import React from 'react';
import {
  Box,
  Flex,
  Text,
  AspectRatio,
  Center,
  Button,
  Divider,
} from '@chakra-ui/react';
import {IoCameraSharp} from 'react-icons/io5';
import Link from 'next/link';

const QrTitle = ({text}: {text: string}) => (
  <Flex>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="0 1rem 0 0"
      color="#406b94"
    >
      <IoCameraSharp size="2rem" />
    </Box>
    <Text fontWeight="bold" fontSize="1.3rem" color="#26292e">
      {text}
    </Text>
  </Flex>
);

const Qr = () => (
  <AspectRatio maxw="100px" ratio={1}>
    <Box
      width="100px"
      border="solid 3px #fff"
      backgroundColor="#fff"
      borderRadius="2rem"
    ></Box>
  </AspectRatio>
);

const StatusText = ({isReaded}: {isReaded: boolean}) => (
  <Box color="#2f3e4e">{isReaded ? '読み取り完了' : '読み取り待機中'}</Box>
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

const QrCode = () => {
  return (
    <React.Fragment>
      <Center>
        <Box
          backgroundColor="#bdd7ee"
          margin="2rem 0 0 0"
          padding="1.5rem 1.5rem 0 1.5rem"
          borderRadius="1.5rem"
          width="20rem"
        >
          <Box color="white" margin="0 0 0 .2rem">
            <QrTitle text="QRコード読み取り" />
          </Box>
          <Box margin="1rem .2rem .2rem .2rem">
            <Qr />
          </Box>
          <Center padding=".8rem 0 .8rem 0">
            <StatusText isReaded={false} />
          </Center>
        </Box>
      </Center>
      <Center margin="1rem 0 1rem 0">
        <Text fontWeight="bold" fontSize=".9rem">
          または
        </Text>
      </Center>
      <Center>
        <Button
          backgroundColor="#eebdc0"
          borderRadius="1.5rem"
          padding="2rem 3rem 2rem 3rem"
          width="20rem"
        >
          <Text fontWeight="medium" fontSize="1.2rem">
            座席コードを直接入力する
          </Text>
        </Button>
      </Center>
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

export default QrCode;

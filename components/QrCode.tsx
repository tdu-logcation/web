import React from 'react';
import {
  Box,
  Flex,
  Text,
  AspectRatio,
  Center,
  Button,
  Spinner,
} from '@chakra-ui/react';
import {IoCameraSharp} from 'react-icons/io5';
import QrReader from './QrReader';
import {cameraStatusText} from '../utils/qrUtil';

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

const Qr = ({
  load,
  setLoad,
  isRead,
  setIsRead,
}: {
  load: boolean;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
  isRead: boolean;
  setIsRead: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [data, setData] = React.useState<string>(null);
  React.useEffect(() => {
    console.log(data);
    console.log(load);
  }, [data, load]);

  return (
    <AspectRatio maxw="100px" ratio={1}>
      <Box
        width="100px"
        border="solid 1px #fff"
        backgroundColor="#fff"
        borderRadius="2rem"
      >
        <Spinner thickness="4px" size="xl" hidden={load} color="#bdd7ee" />
        <QrReader
          setData={setData}
          reserve={() => setLoad(true)}
          isRead={isRead}
          setIsRead={setIsRead}
          hidden={!load}
        />
      </Box>
    </AspectRatio>
  );
};

const StatusText = ({isLoad, isRead}: {isLoad: boolean; isRead: boolean}) => {
  return <Box color="#2f3e4e">{cameraStatusText(isLoad, isRead)}</Box>;
};

const QrCode = () => {
  const [load, setLoad] = React.useState<boolean>(false);
  const [isRead, setIsRead] = React.useState<boolean>(true);

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
            <Qr
              load={load}
              setLoad={setLoad}
              isRead={isRead}
              setIsRead={setIsRead}
            />
          </Box>
          <Center padding=".8rem 0 .8rem 0">
            <StatusText isRead={isRead} isLoad={load} />
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
    </React.Fragment>
  );
};

export default QrCode;

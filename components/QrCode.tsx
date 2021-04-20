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
import {IoCameraSharp, IoVideocamOff} from 'react-icons/io5';
import QrReader from './QrReader';
import {cameraStatusText} from '../utils/qrUtil';

const QrTitle = ({text}: {text: string}) => (
  <Flex>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="0 1rem 0 0"
    >
      <IoCameraSharp size="2rem" color="#406b94" />
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
  useCamera,
  setUseCamera,
}: {
  load: boolean;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
  isRead: boolean;
  setIsRead: React.Dispatch<React.SetStateAction<boolean>>;
  useCamera: boolean;
  setUseCamera: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [data, setData] = React.useState<string>(null);

  React.useEffect(() => {
    console.log(data);
    console.log(useCamera);
  }, [data, useCamera]);

  return (
    <AspectRatio maxw="100px" ratio={1}>
      <Box
        width="100px"
        border="solid 2px #fff"
        backgroundColor="#fff"
        borderRadius="2rem"
        position="relative"
      >
        <Spinner
          thickness="4px"
          size="xl"
          hidden={load || !useCamera}
          color="#bdd7ee"
          position="absolute"
          zIndex="1"
        />
        <Box hidden={useCamera}>
          <IoVideocamOff size="3rem" color="406b94" />
        </Box>
        <Box position="absolute" zIndex="0" borderRadius="2rem">
          <QrReader
            setData={setData}
            reserve={() => setLoad(true)}
            isRead={isRead}
            setIsRead={setIsRead}
            hidden={!load}
            setUseCamera={setUseCamera}
          />
        </Box>
      </Box>
    </AspectRatio>
  );
};

const StatusText = ({
  isLoad,
  isRead,
  isUseCamera,
}: {
  isLoad: boolean;
  isRead: boolean;
  isUseCamera: boolean;
}) => {
  return (
    <Box color="#2f3e4e">{cameraStatusText(isLoad, isRead, isUseCamera)}</Box>
  );
};

const QrCode = () => {
  const [load, setLoad] = React.useState<boolean>(false);
  const [isRead, setIsRead] = React.useState<boolean>(true);
  const [useCamera, setUseCamera] = React.useState<boolean>(true);

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
              useCamera={useCamera}
              setUseCamera={setUseCamera}
            />
          </Box>
          <Center padding=".8rem 0 .8rem 0">
            <StatusText isRead={isRead} isLoad={load} isUseCamera={useCamera} />
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

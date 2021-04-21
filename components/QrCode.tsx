import React from 'react';
import {
  Box,
  Flex,
  Text,
  AspectRatio,
  Center,
  Button,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import {IoCameraSharp, IoVideocamOff, IoReloadOutline} from 'react-icons/io5';
import QrReader from './QrReader';
import {cameraStatusText} from '../utils/qrUtil';
import {useRecoilState} from 'recoil';
import {
  qrReadState,
  qrLoadState,
  useCameraState,
  cameraComponentState,
  qrDataState,
} from '../utils/recoilAtoms';

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

/**
 * カメラのステータスを表示します
 * - ロード中: プログレス。ロード中かつカメラが使用可の場合
 * - カメラの使用拒否: アイコン
 *
 * @param isLoad ロード中の状態
 * @param isUseCamera カメラ使用可否状態
 * @param isQrRead 読み取り完了したか
 */
const qrStatus = (isLoad: boolean, isUseCamera: boolean, isQrRead: boolean) => {
  if (isLoad && isUseCamera) {
    return (
      <Spinner
        thickness="4px"
        size="xl"
        color="#bdd7ee"
        position="absolute"
        zIndex="1"
      />
    );
  }
  if (!isUseCamera || isQrRead) {
    return (
      <button
        onClick={() => {
          location.reload();
        }}
      >
        {isQrRead ? (
          <IoReloadOutline size="3rem" color="#406b94" />
        ) : (
          <IoVideocamOff size="3rem" color="#406b94" />
        )}
      </button>
    );
  }

  return;
};

const Qr = () => {
  const toast = useToast();
  const [isQrRead] = useRecoilState(qrReadState);
  const [isQrLoad] = useRecoilState(qrLoadState);
  const [useCamera] = useRecoilState(useCameraState);
  const [qrData] = useRecoilState(qrDataState);
  const [cameraComponent, setCameraComponent] = useRecoilState(
    cameraComponentState
  );

  React.useEffect(() => {
    if (isQrRead || !useCamera) {
      setCameraComponent(false);
    }
    if (isQrRead) {
      toast({
        title: '読み取り完了',
        description: qrData,
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
    }
  }, [isQrRead, useCamera]);

  return (
    <AspectRatio max="100px" ratio={1}>
      <Box
        width="100px"
        border="solid 2px #fff"
        backgroundColor="#fff"
        borderRadius="2rem"
        position="relative"
        zIndex="1"
      >
        {qrStatus(isQrLoad, useCamera, isQrRead)}
        <Box position="absolute" zIndex="0" borderRadius="2rem" width="100%">
          {cameraComponent ? <QrReader /> : null}
        </Box>
      </Box>
    </AspectRatio>
  );
};

/**
 * ステータステキストを表示
 */
const StatusText = () => {
  const [isQrLoad] = useRecoilState(qrLoadState);
  const [useCamera] = useRecoilState(useCameraState);
  const [isQrRead] = useRecoilState(qrReadState);
  return (
    <Box color="#2f3e4e">{cameraStatusText(isQrLoad, isQrRead, useCamera)}</Box>
  );
};

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
            <StatusText />
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

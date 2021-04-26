/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

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
  campusState,
  logState,
} from '../utils/recoilAtoms';
import {Campus} from '../@types/campus';
import * as colors from '../utils/colors';
import {parseQrData, validateQrData} from '../utils/logUtil';

const QrTitle = ({text}: {text: string}) => (
  <Flex>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="0 1rem 0 0"
    >
      <IoCameraSharp size="2rem" color={colors.mainSecondly} />
    </Box>
    <Text fontWeight="bold" fontSize="1.3rem" color={colors.textPrimary}>
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
        color={colors.mainSecondly}
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
          <IoReloadOutline size="3rem" color={colors.mainSecondly} />
        ) : (
          <IoVideocamOff size="3rem" color={colors.mainSecondly} />
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
  const [isCampus] = useRecoilState(campusState);
  const [cameraComponent, setCameraComponent] = useRecoilState(
    cameraComponentState
  );

  const [log, setLog] = useRecoilState(logState);

  React.useEffect(() => {
    if (isQrRead || !useCamera) {
      setCameraComponent(false);
    }
    if (isQrRead) {
      if (validateQrData(qrData)) {
        const nextLog = [...log];
        const parsedQrData = parseQrData(qrData.slice(qrData.indexOf('/') + 1));

        nextLog.push(parsedQrData);

        setLog(nextLog);

        toast({
          title: '読み取り完了',
          description: (
            <Text wordBreak="break-all">
              {parsedQrData.buildingNumber}号館&nbsp;
              {parsedQrData.floorNumber}階
            </Text>
          ),
          status: 'info',
          duration: 4000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'QRコードが正しくありません',
          description: <Text wordBreak="break-all">{qrData}</Text>,
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      }
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
          {cameraComponent && isCampus !== Campus.null ? <QrReader /> : null}
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
    <Box color={colors.textSecondly}>
      {cameraStatusText(isQrLoad, isQrRead, useCamera)}
    </Box>
  );
};

const QrCode = () => {
  return (
    <React.Fragment>
      <Center>
        <Box
          backgroundColor={colors.mainPrimary}
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
        <Text fontWeight="bold" fontSize=".9rem" color={colors.textPrimary}>
          または
        </Text>
      </Center>
      <Center>
        <Button
          backgroundColor={colors.buttonPrimary}
          borderRadius="1.5rem"
          padding="2rem 3rem 2rem 3rem"
          width="20rem"
        >
          <Text
            fontWeight="medium"
            fontSize="1.2rem"
            color={colors.textPrimary}
          >
            座席コードを直接入力する
          </Text>
        </Button>
      </Center>
    </React.Fragment>
  );
};

export default QrCode;

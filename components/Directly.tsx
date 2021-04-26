/**!
 *
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import {
  Center,
  Button,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  ModalFooter,
  useToast,
} from '@chakra-ui/react';
import * as colors from '../utils/colors';
import React from 'react';
import {useRecoilState} from 'recoil';
import {directText, logState} from '../utils/recoilAtoms';
import {parseQrData, validateQrData} from '../utils/logUtil';

export const Direct = () => {
  const toast = useToast();
  const {isOpen, onOpen, onClose} = useDisclosure();

  const [text, setText] = useRecoilState(directText);
  const [log, setLog] = useRecoilState(logState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const close = () => {
    onClose();
    setText('');
  };

  const save = () => {
    const data = `jp.ac.dendai/${text}`;
    if (validateQrData(data)) {
      const nextLog = [...log];
      const parsedQrData = parseQrData(data.slice(data.indexOf('/') + 1));

      nextLog.push(parsedQrData);

      setLog(nextLog);
      onClose();
      setText('');

      toast({
        title: '追加完了',
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
        title: '座席コードが正しくありません',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Center>
      <Button
        backgroundColor={colors.buttonPrimary}
        borderRadius="1.5rem"
        padding="2rem 3rem 2rem 3rem"
        width="20rem"
        onClick={onOpen}
      >
        <Text fontWeight="medium" fontSize="1.2rem" color={colors.textPrimary}>
          座席コードを直接入力する
        </Text>
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={close}
        isCentered
        motionPreset="slideInBottom"
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={colors.textPrimary} margin="1rem 0 .5rem 0">
            座席コードを直接入力する
          </ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                size="lg"
                value={text}
                onChange={handleChange}
                placeholder="座席コード"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button backgroundColor={colors.mainPrimary} mr={3} onClick={save}>
              保存
            </Button>
            <Button backgroundColor={colors.buttonSecondly} onClick={close}>
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

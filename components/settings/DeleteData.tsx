/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */
import React from 'react';
import {
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';
import {logState} from '../../utils/recoilAtoms';
import * as colors from '../../utils/colors';

export const DeleteData = () => {
  const [log, setLog] = useRecoilState(logState);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = useToast();

  const deleteLog = () => {
    if (log.length !== 0) {
      setLog([]);
      toast({
        title: '完全に削除しました',
        status: 'info',
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'ログデータはすでに空です',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    onClose();
  };

  return (
    <Box>
      <Button
        size="xs"
        color={useColorModeValue(
          colors.light.textPrimary,
          colors.dark.textPrimary
        )}
        variant="link"
        onClick={onOpen}
      >
        ログデータをすべて削除する
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>本当に削除しますか？</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody
            color={useColorModeValue(
              colors.light.textSecondly,
              colors.dark.textSecondly
            )}
          >
            この操作は元には戻せません。
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor={useColorModeValue(
                colors.light.mainPrimary,
                colors.dark.mainPrimary
              )}
              color={useColorModeValue(
                colors.light.textPrimary,
                colors.dark.textPrimary
              )}
              marginRight=".5rem"
              onClick={deleteLog}
            >
              削除
            </Button>
            <Button
              variant="ghost"
              color={useColorModeValue(
                colors.light.textPrimary,
                colors.dark.textPrimary
              )}
              mr={3}
              onClick={onClose}
            >
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

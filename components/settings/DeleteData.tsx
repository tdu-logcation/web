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
} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';
import {logState} from '../../utils/recoilAtoms';
import {colors} from '../../utils/colors';
import {DB} from '../../utils/db';

export const DeleteData = () => {
  const [log, setLog] = useRecoilState(logState);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = useToast();

  const deleteLog = async () => {
    const db: DB = new DB('log');
    await db.openDB();

    // 下方互換
    if (log.length !== 0) {
      setLog([]);
    }

    if ((await db.count()) !== 0) {
      await db.deleteDB();

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
        color={colors('textPrimary')}
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
          <ModalBody color={colors('textSecondly')}>
            この操作は元には戻せません。
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor={colors('mainPrimary')}
              color={colors('textPrimary')}
              marginRight=".5rem"
              onClick={deleteLog}
            >
              削除
            </Button>
            <Button
              variant="ghost"
              color={colors('textPrimary')}
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

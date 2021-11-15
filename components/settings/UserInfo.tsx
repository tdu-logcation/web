/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */
import {
  ListIcon,
  Flex,
  Button,
  useClipboard,
  useToast,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import {colors} from '../../utils/colors';
import {IoPersonCircleOutline} from 'react-icons/io5';
import {useRecoilValue} from 'recoil';
import {userInfo} from '../../utils/recoilAtoms';
import {formatDate} from '../../utils/formatUtil';

const UserInfo = () => {
  const _userInfo = useRecoilValue(userInfo);
  const {onCopy} = useClipboard(_userInfo?.id);
  const toast = useToast();
  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleChange = () => {
    onCopy();
    toast({
      title: 'IDをコピーしました',
      status: 'success',
    });
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ユーザ情報</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody>
            <UnorderedList>
              <ListItem>ユーザ名: {_userInfo?.name}</ListItem>
              <ListItem>ユーザID: {_userInfo?.id}</ListItem>
              <ListItem>作成日: {_userInfo?.createDate}</ListItem>
              <ListItem>
                更新日: {formatDate(_userInfo?.updateDate, false)}
              </ListItem>
              <ListItem>ログ数: {_userInfo?.numberOfLogs}</ListItem>
            </UnorderedList>
          </ModalBody>
          <ModalFooter>
            <Button
              color={colors('textPrimary')}
              variant="ghost"
              onClick={onClose}
            >
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ListIcon as={IoPersonCircleOutline} color={colors('mainSecondly')} />
      ユーザ情報
      <Flex marginLeft="1rem" marginY=".5rem">
        <Button
          backgroundColor={colors('mainPrimary')}
          marginX=".5rem"
          size="sm"
          onClick={() => {
            onOpen();
          }}
        >
          ユーザ情報
        </Button>
        <Button
          backgroundColor={colors('mainPrimary')}
          marginX=".5rem"
          size="sm"
          onClick={handleChange}
        >
          IDをコピー
        </Button>
      </Flex>
    </>
  );
};

export default UserInfo;

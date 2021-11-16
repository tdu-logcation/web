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
  Input,
} from '@chakra-ui/react';
import {colors} from '../../utils/colors';
import {IoPersonCircleOutline} from 'react-icons/io5';
import {useRecoilValue} from 'recoil';
import {userInfo} from '../../utils/recoilAtoms';
import {formatDate} from '../../utils/formatUtil';
import React from 'react';
import useRename from '../../hooks/useRename';

const UserInfo = () => {
  const _userInfo = useRecoilValue(userInfo);
  const {onCopy} = useClipboard(_userInfo?.id);
  const toast = useToast();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [userName, setUserName] = React.useState('');
  const [userNameState, setUserNameState] = React.useState(false);
  const rename = useRename();
  const {
    isOpen: isOpenChangeName,
    onOpen: onOpenChangeName,
    onClose: onCloseChangeName,
  } = useDisclosure();

  const handleChange = () => {
    onCopy();
    toast({
      title: 'IDをコピーしました',
      status: 'success',
    });
  };

  const inputUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const changeUserName = () => {
    if (userName.length === 0) {
      setUserNameState(true);
      return;
    }
    rename(userName);

    onCloseChangeName();
    setUserNameState(true);
    setUserName('');
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
      <Modal
        isOpen={isOpenChangeName}
        onClose={onCloseChangeName}
        isCentered
        motionPreset="slideInBottom"
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ユーザ名変更</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody>
            <Input
              marginTop="1rem"
              placeholder="新しいユーザ名"
              value={userName}
              onChange={inputUserName}
              isInvalid={userNameState}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor={colors('mainPrimary')}
              variant="ghost"
              onClick={changeUserName}
              marginRight=".5rem"
            >
              変更
            </Button>
            <Button
              color={colors('textPrimary')}
              variant="ghost"
              onClick={onCloseChangeName}
            >
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ListIcon as={IoPersonCircleOutline} color={colors('mainSecondly')} />
      ユーザ関連
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
          onClick={() => {
            onOpenChangeName();
          }}
        >
          名前変更
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

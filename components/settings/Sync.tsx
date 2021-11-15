/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import {
  ListIcon,
  Box,
  FormControl,
  Switch,
  FormLabel,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
  ModalContent,
  useDisclosure,
  Input,
  Text,
  Checkbox,
} from '@chakra-ui/react';
import {colors} from '../../utils/colors';
import {IoSyncOutline} from 'react-icons/io5';
import React from 'react';
import {isCloud} from '../../utils/recoilAtoms';
import {useRecoilState} from 'recoil';
import useCreateUser from '../../hooks/useCreateUser';
import useLoginUser from '../../hooks/useLoginUser';
import Link from 'next/link';

const Sync = () => {
  const [cloud, setCloud] = useRecoilState(isCloud);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {
    isOpen: isOpenLogout,
    onOpen: onOpenLogout,
    onClose: onCloseLogout,
  } = useDisclosure();
  const [userName, setUserName] = React.useState('');
  const [userNameState, setUserNameState] = React.useState(false);
  const [startOk, setStartOk] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [createUser] = useCreateUser();
  const [loginUser] = useLoginUser();

  const handleChange = () => {
    if (!cloud) {
      onOpen();
    } else {
      //   setCloud(false);
      onOpenLogout();
    }
  };

  const start = () => {
    if (userName.length === 0) {
      setUserNameState(true);
      return;
    }
    setUserNameState(false);
    setUserName('');
    onClose();

    if (isLogin) {
      loginUser(userName);
    } else {
      createUser(userName);
    }
  };

  const inputUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
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
          <ModalHeader>クラウド同期を開始する</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody>
            {isLogin ? (
              <Text>
                ログを同期するにはIDを入力してください。
                <br />
                すでにログインしているユーザが対象です。
              </Text>
            ) : (
              <Text>
                ユーザ名を設定します。
                <br />
                ランキングに表示されるため、特定されない名前をご使用ください。
              </Text>
            )}
            <Input
              marginTop="1rem"
              placeholder={isLogin ? 'ID' : 'ユーザ名'}
              value={userName}
              onChange={inputUserName}
              isInvalid={userNameState}
            />
            <Switch
              marginY=".5rem"
              onChange={() => setIsLogin(v => !v)}
              isChecked={isLogin}
            >
              IDを入力してログインする
            </Switch>
            <Checkbox isChecked={startOk} onChange={() => setStartOk(!startOk)}>
              <Link href="/terms">
                <Text
                  fontWeight="bold"
                  as="span"
                  _hover={{textDecoration: 'underline'}}
                >
                  利用規約
                </Text>
              </Link>
              に同意する
            </Checkbox>
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor={colors('mainPrimary')}
              onClick={start}
              disabled={!startOk}
            >
              利用開始
            </Button>
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
        isOpen={isOpenLogout}
        onClose={onCloseLogout}
        isCentered
        motionPreset="slideInBottom"
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>クラウド同期をログアウトする</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              backgroundColor={colors('mainPrimary')}
              //   onClick={() => {}}
              disabled={!startOk}
            >
              ログアウト
            </Button>
            <Button
              color={colors('textPrimary')}
              variant="ghost"
              onClick={onCloseLogout}
            >
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ListIcon as={IoSyncOutline} color={colors('mainSecondly')} />
      クラウド同期
      <Box margin=".5rem 0 1.5rem 1.5rem">
        <FormControl display="flex" alignItems="center">
          <Switch
            isChecked={cloud}
            onChange={handleChange}
            id="cloud-switch"
            size="md"
          />
          <FormLabel
            htmlFor="cloud-switch"
            mb="0"
            fontWeight="bold"
            marginLeft=".5rem"
          >
            クラウド同期を利用する
          </FormLabel>
        </FormControl>
      </Box>
    </>
  );
};

export default Sync;

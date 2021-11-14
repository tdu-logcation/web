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

const Sync = () => {
  const [cloud, setCloud] = useRecoilState(isCloud);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [userName, setUserName] = React.useState('');
  const [startOk, setStartOk] = React.useState(false);

  const handleChange = () => {
    if (!cloud) {
      onOpen();
    } else {
      setCloud(false);
    }
  };

  const start = () => {
    onClose();
    setCloud(true);
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
          <ModalHeader>クラウド同期を使う</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody>
            <Text>
              ユーザ名を設定します。
              ランキングに表示されるため、特定されない名前をご使用ください。
            </Text>
            <Input
              marginY="1rem"
              placeholder="ユーザ名"
              onChange={inputUserName}
            />
            <Checkbox isChecked={startOk} onChange={() => setStartOk(!startOk)}>
              利用規約に同意する
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

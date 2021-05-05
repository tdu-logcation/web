/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Link,
} from '@chakra-ui/react';
import * as color from '../utils/colors';
import {
  savedLogState,
  logState,
  tweetLinkState,
  confirmationTextState,
} from '../utils/recoilAtoms';
import {useRecoilState} from 'recoil';
import {resultText, tweetText} from '../utils/formatUtil';

export const Twitter = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const [savedLog, setSavedLog] = useRecoilState(savedLogState);
  const [log] = useRecoilState(logState);
  const [text, setText] = useRecoilState(confirmationTextState);
  const [tweet, setTweet] = useRecoilState(tweetLinkState);

  React.useEffect(() => {
    if (savedLog) {
      onOpen();
      setSavedLog(false);
      setText(resultText(log));
      setTweet(tweetText(log));
    }
  }, [savedLog]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ログを保存しました</ModalHeader>
        <ModalCloseButton size="lg" />
        <ModalBody>{text}</ModalBody>

        <ModalFooter>
          <Link href={tweet}>
            <Button
              backgroundColor={color.mainPrimary}
              color={color.textPrimary}
              onClick={onClose}
            >
              ツイート
            </Button>
          </Link>
          <Button variant="ghost" color={color.textPrimary} onClick={onClose}>
            閉じる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

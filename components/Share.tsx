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
import {colors} from '../utils/colors';
import {
  savedLogState,
  tweetLinkState,
  confirmationTextState,
} from '../utils/recoilAtoms';
import {useRecoilState} from 'recoil';
import {resultText, tweetText} from '../utils/formatUtil';
import {DB} from '../utils/db';

export const Twitter = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const [savedLog, setSavedLog] = useRecoilState(savedLogState);
  const [text, setText] = useRecoilState(confirmationTextState);
  const [tweet, setTweet] = useRecoilState(tweetLinkState);

  React.useEffect(() => {
    const f = async () => {
      const db: DB = new DB('log');
      await db.openDB();
      if (savedLog) {
        const latestLog = await db.getLatest();
        console.log(latestLog);
        onOpen();
        setSavedLog(false);
        setText(resultText(latestLog));
        setTweet(tweetText(latestLog, await db.count()));
      }
    };
    f();
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
              backgroundColor={colors('mainPrimary')}
              color={colors('textPrimary')}
              onClick={onClose}
            >
              ツイート
            </Button>
          </Link>
          <Button
            variant="ghost"
            color={colors('textPrimary')}
            onClick={onClose}
          >
            閉じる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

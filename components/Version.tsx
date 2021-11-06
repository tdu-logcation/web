import {useRecoilState} from 'recoil';
import {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
  ModalContent,
  Link,
  Text,
} from '@chakra-ui/react';
import {v} from '../utils/version';
import {version} from '../utils/recoilAtoms';
import React from 'react';
import {colors} from '../utils/colors';

const Version = () => {
  const [_version, setVersion] = useRecoilState(version);
  const {isOpen, onOpen, onClose} = useDisclosure();

  React.useEffect(() => {
    if (_version !== v || v === 'dev') {
      // バージョンの更新とモーダル表示
      onOpen();
      setVersion(v);
    }
  }, []);

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
          <ModalHeader>Logcation "{v}" 新着情報</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody>
            詳しくは、
            <Link
              isExternal
              href={
                v !== 'dev'
                  ? `https://github.com/tdu-logcation/web/releases/tag/${v}/`
                  : 'https://github.com/tdu-logcation/web'
              }
              _hover={{color: 'blue.300'}}
            >
              <Text fontWeight="bold" textDecoration="underline" as="span">
                リリースノート
              </Text>
            </Link>
            を参照してください。
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
    </>
  );
};

export default Version;

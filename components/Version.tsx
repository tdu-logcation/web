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
} from '@chakra-ui/react';
import {v} from '../utils/version';
import {version} from '../utils/recoilAtoms';
import React from 'react';
import {colors} from '../utils/colors';

const Version = () => {
  const [_version, setVersion] = useRecoilState(version);
  const {isOpen, onOpen, onClose} = useDisclosure();

  React.useEffect(() => {
    if (_version !== v) {
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
          <ModalHeader>Logcation 新着情報</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody>
            詳しくは、
            <br />
            <Link isExternal>
              https://github.com/hello-slide/front/releases/tag{v}/
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

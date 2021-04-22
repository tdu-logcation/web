import React from 'react';
import {useRecoilState} from 'recoil';
import {campusState} from '../utils/recoilAtoms';
import {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Center,
  Button,
  Box,
} from '@chakra-ui/react';
import * as colors from '../utils/colors';
import {Campus} from '../@types/campus';

export const SelectCampus = () => {
  const [campus, setCampus] = useRecoilState(campusState);
  const {isOpen, onClose} = useDisclosure({isOpen: campus === Campus.null});

  React.useEffect(() => {
    if (campus !== Campus.null) {
      onClose();
    }
  }, [campus]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
      size="sm"
    >
      <ModalOverlay>
        <ModalContent>
          <Box margin="1rem">
            <ModalHeader color={colors.textPrimary}>
              <Center>キャンパスを選択してください</Center>
            </ModalHeader>
            <ModalBody pb={3}>
              <Center>
                <Button
                  colorScheme="teal"
                  size="lg"
                  onClick={() => setCampus(Campus.senju)}
                  margin="0 1rem 0 .5rem"
                  color={colors.textPrimary}
                  backgroundColor={colors.buttonSecondly}
                  borderRadius="1rem"
                >
                  千住
                </Button>
                <Button
                  colorScheme="teal"
                  size="lg"
                  onClick={() => setCampus(Campus.hatoyama)}
                  margin="0 .5rem 0 1rem"
                  color={colors.textPrimary}
                  backgroundColor={colors.buttonSecondly}
                  borderRadius="1rem"
                >
                  鳩山
                </Button>
              </Center>
            </ModalBody>
          </Box>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

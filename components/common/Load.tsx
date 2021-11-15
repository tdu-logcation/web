import {LoadState} from '../../utils/recoilAtoms';
import {useRecoilValue} from 'recoil';
import {Flex, Spinner} from '@chakra-ui/react';
import {colors} from '../../utils/colors';

const Load = () => {
  const isLoad = useRecoilValue(LoadState);

  if (isLoad) {
    return (
      <>
        <Flex
          width="100vw"
          height="100vh"
          position="fixed"
          top="0"
          left="0"
          zIndex="9999"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            color={colors('mainSecondly')}
            size="xl"
          />
        </Flex>
      </>
    );
  }
  return <></>;
};

export default Load;

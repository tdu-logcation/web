import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/react';
import {IoCameraSharp} from 'react-icons/io5';

function QrTitle({text}: {text: string}) {
  return (
    <Box color="white">
      <Flex>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="0 1rem 0 0"
        >
          <IoCameraSharp size="1.5rem" />
        </Box>
        <Text fontWeight="bold" fontSize="1.2rem">
          {text}
        </Text>
      </Flex>
    </Box>
  );
}

export default function QrCode() {
  return (
    <React.Fragment>
      <Box
        backgroundColor="blue"
        margin="2rem"
        padding="1.5rem"
        borderRadius="1.5rem"
      >
        <QrTitle text="QRコード読み取り" />
      </Box>
    </React.Fragment>
  );
}

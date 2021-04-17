import React from 'react';
import {Box, Center} from '@chakra-ui/react';
import {IoCameraSharp} from 'react-icons/io5';

function QrTitle({text}: {text: string}) {
  return (
    <Center>
      <Box backgroundColor="blue" margin="3rem" padding="5rem">
        <Box>
          <IoCameraSharp />
          {text}
        </Box>
      </Box>
    </Center>
  );
}

export default function QrCode() {
  return (
    <React.Fragment>
      <QrTitle text="QRコード読み取り" />
    </React.Fragment>
  );
}

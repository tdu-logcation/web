import React from 'react';
import {Box} from '@chakra-ui/react';

export const SafeArea: React.FC = props => {
  return (
    <Box style={{paddingBottom: 'env(safe-area-inset-bottom, 0)'}}>
      {props.children}
    </Box>
  );
};

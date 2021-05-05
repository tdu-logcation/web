import React, {VFC} from 'react';
import {
  Switch,
  useColorMode,
  ListIcon,
  FormLabel,
  Box,
  FormControl,
} from '@chakra-ui/react';
import {IoInvertModeOutline} from 'react-icons/io5';
import {colors} from '../../utils/colors';

const ColorModeSwitch: VFC = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <React.Fragment>
      <ListIcon as={IoInvertModeOutline} color={colors('mainSecondly')} />
      テーマ変更
      <Box margin=".5rem 0 1.5rem 1.5rem">
        <FormControl display="flex" alignItems="center">
          <Switch
            isChecked={colorMode === 'dark'}
            onChange={() => toggleColorMode()}
            id="theme-switch"
            size="md"
          />
          <FormLabel
            htmlFor="theme-switch"
            mb="0"
            fontWeight="bold"
            marginLeft=".5rem"
          >
            ダークモードに変更
          </FormLabel>
        </FormControl>
      </Box>
    </React.Fragment>
  );
};

export default ColorModeSwitch;

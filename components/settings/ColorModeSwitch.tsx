import React, {VFC} from 'react';
import {Switch, useColorMode, ListIcon, Text, Flex} from '@chakra-ui/react';
import {IoMoon, IoSunny} from 'react-icons/io5';
import {colors} from '../../utils/colors';

const ColorModeSwitch: VFC = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <React.Fragment>
      <ListIcon
        as={colorMode === 'light' ? IoMoon : IoSunny}
        color={colors('mainSecondly')}
      />
      <Flex>
        <Switch onClick={() => toggleColorMode()} />
        <Text>
          {(colorMode === 'light' ? 'ダークモード' : 'ライトモード') + 'に変更'}
        </Text>
      </Flex>
    </React.Fragment>
  );
};

export default ColorModeSwitch;

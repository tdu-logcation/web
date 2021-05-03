import {VFC} from 'react';
import {Icon, IconButton, useColorMode} from '@chakra-ui/react';
import {IoMoon, IoSunny} from 'react-icons/io5';

const ColorModeSwitch: VFC = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <IconButton
      py={'1rem'}
      mx={1}
      aria-label={
        'カラーテーマを' +
        (colorMode === 'light' ? 'ダークモード' : 'ライトモード') +
        'に変更'
      }
      icon={
        colorMode === 'light' ? <Icon as={IoMoon} /> : <Icon as={IoSunny} />
      }
      bgColor={'transparent'}
      onClick={() => toggleColorMode()}
    />
  );
};

export default ColorModeSwitch;

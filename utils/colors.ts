/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import {useColorModeValue} from '@chakra-ui/react';
import {Theme} from '../@types/Theme';

const dark: Theme = {
  background: 'gray.800',

  mainPrimary: '#344350', // TODO: 調整
  mainSecondly: '#bdd7ee', // TODO: 調整

  textPrimary: '#d6d6d6',
  textSecondly: '#b5b5b5',
  textTertiary: '#050505',

  buttonPrimary: '#8a585b', // TODO: 調整
  buttonSecondly: '#0f0f0f',
  buttonIconSecondly: '#b5b5b5',

  divider: '#0f0f0f',
};
const light: Theme = {
  background: '#fff',

  mainPrimary: '#bdd7ee',
  mainSecondly: '#406b94',

  textPrimary: '#2b2b2b',
  textSecondly: '#4a4a4a',
  textTertiary: '#fafafa',

  buttonPrimary: '#eebdc0',
  buttonSecondly: '#f2f2f2',
  buttonIconSecondly: '#4a4a4a',

  divider: '#f2f2f2',
};

/**
 * カラー選択
 * @param colorName カラー名 keyof Theme
 */
export const colors = (colorName: keyof Theme): string =>
  useColorModeValue(light[colorName], dark[colorName]);

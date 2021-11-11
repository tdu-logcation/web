/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import {Box, Text, Center, Flex, Spacer, Link} from '@chakra-ui/react';
import {colors} from '../../utils/colors';
import {v} from '../../utils/version';

export const Footer = () => {
  return (
    <Box margin="1rem 0 2rem 0">
      <Center>
        <Flex width="20rem" justifyContent="center" alignItems="center">
          <Box>
            <Link href="https://github.com/tdu-logcation/web" isExternal>
              <Box color={colors('textSecondly')} fontSize=".7rem">
                {v}
              </Box>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Text color={colors('textSecondly')} fontSize=".7rem">
              Copyright (C) 2021 Logcation
            </Text>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

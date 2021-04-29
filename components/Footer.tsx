import {Box, Text, Center, Flex, Spacer, Link} from '@chakra-ui/react';
import * as colors from '../utils/colors';
import {HiExternalLink} from 'react-icons/hi';

export const Footer = () => {
  return (
    <Box margin="1rem 0 1rem 0">
      <Center>
        <Flex width="20rem" justifyContent="center" alignItems="center">
          <Box>
            <Link href="https://github.com/tdu-logcation/web" isExternal>
              <Text color={colors.textSecondly} fontSize=".7rem">
                <Flex>
                  GitHub
                  <HiExternalLink />
                </Flex>
              </Text>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Text color={colors.textSecondly} fontSize=".7rem">
              Copyright (C) 2021 Logcation
            </Text>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

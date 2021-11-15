import {Box, Text, Center} from '@chakra-ui/react';
import {OtherPage} from './common/OtherPage';
import {isCloud} from '../utils/recoilAtoms';
import {useRecoilValue} from 'recoil';
import Link from 'next/link';
import RankingTable from './RankingTable';

const Ranking = () => {
  const cloud = useRecoilValue(isCloud);
  return (
    <OtherPage title="ランキング">
      {cloud ? (
        <RankingTable />
      ) : (
        <Center>
          <Box textAlign="center">
            <Text fontWeight="bold" fontSize="1.1rem">
              クラウド保存を有効にしてください
            </Text>
            <Text marginY="1rem">
              ランキングを表示するためには、クラウド保存を有効にする必要があります。
              <br />
              <Text
                as="span"
                _hover={{textDecoration: 'underline'}}
                fontWeight="bold"
              >
                <Link href="/setting">設定</Link>
              </Text>
              で有効にしてください。
            </Text>
          </Box>
        </Center>
      )}
    </OtherPage>
  );
};

export default Ranking;

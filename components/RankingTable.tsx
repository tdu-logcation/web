import {Table, Thead, Tbody, Tr, Th, Td, Text} from '@chakra-ui/react';
import React from 'react';
import useRanking from '../hooks/useRanking';

const RankingTable = () => {
  const [ranks, getRanking] = useRanking();

  React.useEffect(() => {
    getRanking();
  }, []);
  return (
    <>
      <Table variant="striped" size="md">
        <Thead>
          <Tr>
            <Th>
              <Text textAlign="center" fontSize="1rem">
                順位
              </Text>
            </Th>
            <Th>
              <Text textAlign="center" fontSize="1rem">
                ユーザ
              </Text>
            </Th>
            <Th>
              <Text textAlign="center" fontSize="1rem">
                ログ数
              </Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {ranks.map((value, index) => {
            return (
              <Tr key={index}>
                <Td>
                  <Text textAlign="center">{index + 1}</Text>
                </Td>
                <Td>{value.name}</Td>
                <Td>
                  <Text textAlign="center">{value.number_of_logs}</Text>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default RankingTable;

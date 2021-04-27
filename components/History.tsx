import React from 'react';
import {
  Table,
  Center,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';
import {logState} from '../utils/recoilAtoms';
import LogUtil from '../utils/LogUtil';
import {useTable, useSortBy} from 'react-table';
import {IoArrowUpOutline, IoArrowDownOutline} from 'react-icons/io5';
import * as colors from '../utils/colors';

export const History = () => {
  const [log] = useRecoilState(logState);

  const data = log.reverse().map(log => {
    const logUtil = new LogUtil(log.code);
    if (logUtil.validateQrData()) {
      const parsedData = logUtil.parseQrData();
      // const campus = logUtil.getLogCampus();
      return {
        date: log.date,
        building: parsedData.buildingNumber,
        floors: parsedData.floorNumber,
        rooms: parsedData.roomNumber,
      };
    }
  });

  const columns = React.useMemo(
    () => [
      {
        Header: '日付',
        accessor: 'date',
      },
      {
        Header: '号館',
        accessor: 'building',
        isNumeric: true,
      },
      {
        Header: '階数',
        accessor: 'floors',
        isNumeric: true,
      },
      {
        Header: '部屋番号',
        accessor: 'rooms',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data}, useSortBy);

  return (
    <React.Fragment>
      <Center>
        <Box margin="1rem .75rem 1rem .75rem">
          <Table
            {...getTableProps()}
            variant="striped"
            colorScheme="gray"
            size="sm"
          >
            <Thead>
              {headerGroups.map(headerGroup => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      padding=".5rem 0 .5rem 0"
                      backgroundColor={colors.mainPrimary}
                      color={colors.textPrimary}
                    >
                      <Center>
                        <Flex>
                          <Text>{column.render('Header')}</Text>
                          <Text>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <IoArrowUpOutline />
                              ) : (
                                <IoArrowDownOutline />
                              )
                            ) : null}
                          </Text>
                        </Flex>
                      </Center>
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <Td {...cell.getCellProps()} textAlign="center">
                        {cell.render('Cell')}
                      </Td>
                    ))}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </Center>
    </React.Fragment>
  );
};

/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

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
  Button,
} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';
import {logState, tableShowState} from '../utils/recoilAtoms';
import LogUtil from '../utils/LogUtil';
import {formatDate, formatTableShow} from '../utils/formatUtil';
import {useTable, useSortBy} from 'react-table';
import {IoArrowUpOutline, IoArrowDownOutline} from 'react-icons/io5';
import * as colors from '../utils/colors';
import {HistoryTable, TableData} from '../@types/historyTable';
import {tableShow} from '../utils/table';

export const History = () => {
  const [log] = useRecoilState(logState);
  const [show, setShow] = useRecoilState(tableShowState);
  const [dateType, setDateType] = React.useState<boolean>(false);

  React.useEffect(() => {
    // [日時, キャンパス, 号館, 階数, 教室名, 座席位置]
    setShow([true, false, true, false, true, false]);
  }, []);

  const data: TableData[] = React.useMemo(
    () =>
      log.reverse().map(log => {
        const logUtil = new LogUtil(log.code);
        if (logUtil.validateQrData()) {
          const parsedData = logUtil.parseQrData();
          const campus = logUtil.getLogCampus();
          return {
            date: formatDate(log.date, dateType),
            building: parseInt(parsedData.buildingNumber),
            floor: parseInt(parsedData.floorNumber),
            room: parsedData.roomNumber,
            seat: parsedData.seatNumber,
            campus: campus,
          };
        }
      }),
    [dateType]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: '日付',
        accessor: HistoryTable.date,
      },
      {
        Header: 'キャンパス',
        accessor: HistoryTable.campus,
      },
      {
        Header: '号館',
        accessor: HistoryTable.building,
        isNumeric: true,
      },
      {
        Header: '階数',
        accessor: HistoryTable.floor,
        isNumeric: true,
      },
      {
        Header: '部屋番号',
        accessor: HistoryTable.room,
      },
      {
        Header: '座席位置',
        accessor: HistoryTable.seat,
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
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: formatTableShow(show),
      },
    },
    useSortBy
  );

  return (
    <React.Fragment>
      <Button onClick={() => setDateType(!dateType)}>あ</Button>
      <Center>
        <Box margin="1rem .5rem 1rem .5rem">
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

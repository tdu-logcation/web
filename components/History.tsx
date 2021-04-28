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
  Checkbox,
} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';
import {
  logState,
  tableShowState,
  tableDateShortState,
} from '../utils/recoilAtoms';
import LogUtil from '../utils/LogUtil';
import {formatDate, formatTableShow} from '../utils/formatUtil';
import {useTable, useSortBy} from 'react-table';
import {IoArrowUpOutline, IoArrowDownOutline} from 'react-icons/io5';
import * as colors from '../utils/colors';
import {TableData} from '../@types/historyTable';
import {tableShow, tableInit} from '../utils/table';

export const History = () => {
  const [log] = useRecoilState(logState);
  const [show, setShow] = useRecoilState(tableShowState);
  const [dateType, setDateType] = useRecoilState(tableDateShortState);

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
    () =>
      tableShow.map(element => ({
        Header: element.name,
        accessor: element.id,
      })),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setHiddenColumns,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: formatTableShow(tableInit),
      },
    },
    useSortBy
  );

  React.useEffect(() => {
    setHiddenColumns(formatTableShow(show));
  }, [show]);

  const showButton = () => {
    return tableShow.map((element, index) => {
      return (
        <Checkbox
          isChecked={show[index]}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const buffer = [...show];
            buffer[index] = event.target.checked;
            setShow(buffer);
          }}
          key={index}
        >
          {element.name}
        </Checkbox>
      );
    });
  };

  return (
    <React.Fragment>
      <Box>{showButton()}</Box>
      <Box>
        <Checkbox
          isChecked={dateType}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDateType(event.target.checked);
          }}
        >
          日付短縮
        </Checkbox>
      </Box>
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
                      padding=".5rem .1rem .5rem .1rem"
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

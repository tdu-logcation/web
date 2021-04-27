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
} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';
import {logState} from '../utils/recoilAtoms';
import {parseQrData} from '../utils/logUtil';
import {useTable, useSortBy} from 'react-table';
import {IoArrowUpOutline, IoArrowDownOutline} from 'react-icons/io5';

export const History = () => {
  const [log] = useRecoilState(logState);

  const data = React.useMemo(() => {
    return log.reverse().map(log => {
      const parsedData = parseQrData(log.log.replace('jp.ac.dendai/', ''));
      return {
        date: log.date,
        building: parsedData.buildingNumber,
        floors: parsedData.floorNumber,
        rooms: parsedData.roomNumber,
        seat: parsedData.seatNumber,
      };
    });
  }, []);

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
      {
        Header: '席番',
        accessor: 'seat',
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
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Center>
    </React.Fragment>
  );
};

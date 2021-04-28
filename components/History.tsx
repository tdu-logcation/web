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
  Switch,
  FormLabel,
  FormControl,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
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
import {
  IoArrowUpOutline,
  IoArrowDownOutline,
  IoFilterCircleOutline,
} from 'react-icons/io5';
import * as colors from '../utils/colors';
import {TableData} from '../@types/historyTable';
import {tableShow, tableInit} from '../utils/table';

export const History = () => {
  const [log] = useRecoilState(logState);
  const [show, setShow] = useRecoilState(tableShowState);
  const [dateType, setDateType] = useRecoilState(tableDateShortState);
  const {isOpen, onOpen, onClose} = useDisclosure();

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
        return {
          date: 'Null',
          building: 0,
          floor: 0,
          room: 'Null',
          seat: 'Null',
          campus: 'Null',
        };
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

  const copyClipboard = () => {};

  const UtilButton: React.FC<{onClick: () => void}> = ({children, onClick}) => {
    return (
      <Center margin="1rem">
        <Button
          borderRadius="1.5rem"
          width="20rem"
          backgroundColor={colors.buttonSecondly}
          padding="1rem .5rem 1rem .5rem"
          onClick={onClick}
        >
          {children}
        </Button>
      </Center>
    );
  };

  const showButton = () => {
    return tableShow.map((element, index) => {
      return (
        <FormControl
          display="flex"
          alignItems="center"
          margin="1rem .2rem 0 .2rem"
          key={index}
        >
          <Switch
            isChecked={show[index]}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const buffer = [...show];
              buffer[index] = event.target.checked;
              setShow(buffer);
            }}
            size="lg"
            id={`switch-${index}`}
          />
          <FormLabel
            htmlFor={`switch-${index}`}
            marginLeft="1rem"
            mb="0"
            fontSize="1.2em"
            fontWeight="bold"
          >
            {element.name}
          </FormLabel>
        </FormControl>
      );
    });
  };

  return (
    <React.Fragment>
      <Text fontSize="1.5rem" fontWeight="bold" margin="1rem 0 1rem 2rem">
        履歴
      </Text>
      <UtilButton onClick={onOpen}>
        <Text color={colors.textPrimary}>フィルター</Text>
      </UtilButton>
      <UtilButton onClick={copyClipboard}>
        <Text color={colors.textPrimary}>クリップボードにコピー</Text>
      </UtilButton>

      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>フィルター</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody padding="1rem 2rem 2.5rem 2rem">
            <Box>{showButton()}</Box>
            <FormControl
              display="flex"
              alignItems="center"
              margin="1rem .2rem 0 .2rem"
            >
              <Switch
                isChecked={dateType}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setDateType(event.target.checked);
                }}
                id="date-short"
                size="lg"
              />
              <FormLabel
                htmlFor="date-short"
                mb="0"
                marginLeft="1rem"
                fontSize="1.2em"
                fontWeight="bold"
              >
                短い日時
              </FormLabel>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Center>
        <Table
          {...getTableProps()}
          variant="striped"
          colorScheme="gray"
          size="md"
          margin="1rem"
          display="block"
          overflowX="scroll"
          whiteSpace="nowrap"
          css={{'&::-webkit-overflow-scrolling': 'touch'}}
        >
          <Thead>
            {headerGroups.map(headerGroup => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    padding=".5rem .1rem .5rem .1rem"
                    backgroundColor={colors.mainSecondly}
                    color={colors.textTertiary}
                    fontSize="1.2rem"
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
      </Center>
    </React.Fragment>
  );
};

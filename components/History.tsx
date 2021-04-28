/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import React from 'react';
import Link from 'next/link';
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
  ButtonProps,
  useToast,
  Divider,
  Spacer,
} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';
import {
  logState,
  tableShowState,
  tableDateShortState,
  isCopyState,
} from '../utils/recoilAtoms';
import LogUtil from '../utils/LogUtil';
import {formatDate, formatTableShow, exportLog} from '../utils/formatUtil';
import {useTable, useSortBy} from 'react-table';
import {
  IoArrowUpOutline,
  IoArrowDownOutline,
  IoHomeSharp,
} from 'react-icons/io5';
import * as colors from '../utils/colors';
import {TableData} from '../@types/historyTable';
import {tableShow, tableInit} from '../utils/table';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export const History = () => {
  const [log] = useRecoilState(logState);
  const [show, setShow] = useRecoilState(tableShowState);
  const [dateType, setDateType] = useRecoilState(tableDateShortState);
  const [isCopy, setIsCopy] = useRecoilState(isCopyState);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = useToast();

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

  // フィルターボタン
  const UtilButton: React.FC<ButtonProps> = props => {
    return (
      <Center margin="1rem">
        <Button
          borderRadius="1.5rem"
          width="20rem"
          backgroundColor={colors.buttonSecondly}
          padding="1rem .5rem 1rem .5rem"
          {...props}
        >
          {props.children}
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
          margin=".5rem .2rem .5rem .2rem"
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

  // クリップボードコピーダイアログ
  React.useEffect(() => {
    if (isCopy) {
      toast({
        title: 'クリップボードにコピーしました',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
    }
    setIsCopy(false);
  }, [isCopy]);

  return (
    <React.Fragment>
      <Center marginBottom="2rem">
        <Flex width="20rem">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Text
              fontSize="1.3rem"
              fontWeight="bold"
              marginLeft="1.2rem"
              color={colors.textPrimary}
            >
              履歴
            </Text>
          </Box>
          <Spacer />
          <Link href="/">
            <Button
              borderRadius="2rem"
              leftIcon={<IoHomeSharp />}
              backgroundColor={colors.buttonSecondly}
              color={colors.buttonIconSecondly}
              width="9rem"
            >
              <Text color={colors.textPrimary}>ホームへ戻る</Text>
            </Button>
          </Link>
        </Flex>
      </Center>
      <UtilButton onClick={onOpen}>
        <Text color={colors.textPrimary}>フィルター</Text>
      </UtilButton>
      <CopyToClipboard onCopy={() => setIsCopy(true)} text={exportLog(log)}>
        <UtilButton>
          <Text color={colors.textPrimary}>クリップボードにコピー</Text>
        </UtilButton>
      </CopyToClipboard>

      <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>フィルター</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody padding="1rem 2rem 2.5rem 2rem">
            <Box>{showButton()}</Box>
            <Divider colorScheme={colors.divider} borderWidth="1px" />
            <FormControl
              display="flex"
              alignItems="center"
              margin=".5rem .2rem .5rem .2rem"
            >
              <Switch
                isChecked={dateType}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setDateType(event.target.checked);
                }}
                id="dateShort"
                size="lg"
              />
              <FormLabel
                htmlFor="dateShort"
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

      <Center marginTop="2rem">
        <Table
          {...getTableProps()}
          display="block"
          variant="striped"
          colorScheme="gray"
          size="md"
          overflowX="scroll"
          whiteSpace="nowrap"
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
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

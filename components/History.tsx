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
  ButtonProps,
  useToast,
  Divider,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';
import {
  logCountState,
  logTableState,
  tableShowState,
  tableDateShortState,
  isCopyState,
  uniqueRoomNameState,
  logLenState,
  logLenFastState,
} from '../utils/recoilAtoms';
import {LogConvert} from '../utils/logConvert';
import {formatTableShow, exportLog, logLenText} from '../utils/formatUtil';
import {useTable, useSortBy} from 'react-table';
import {IoArrowUpOutline, IoArrowDownOutline} from 'react-icons/io5';
import {colors} from '../utils/colors';
import {TableData} from '../@types/historyTable';
import {tableShow, tableInit, maxDay} from '../utils/table';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {OtherPage} from './common/OtherPage';
import {HistorySettings} from './HistorySettings';
import {DB} from '../utils/db';

export const History = () => {
  const [logTable, setLogTable] = useRecoilState(logTableState);
  const [logCount, setLogCount] = useRecoilState(logCountState);
  const [show, setShow] = useRecoilState(tableShowState);
  const [isCopy, setIsCopy] = useRecoilState(isCopyState);
  const [logLen, setLogLen] = useRecoilState(logLenState);

  const [logLenFast, setLogLenFast] = useRecoilState(logLenFastState);

  const [dateType, setDateType] = useRecoilState(tableDateShortState);
  const [roomType, setRoomType] = useRecoilState(uniqueRoomNameState);

  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = useToast();

  React.useEffect(() => {
    const f = async () => {
      const db: DB = new DB('log');
      await db.openDB();
      setLogTable(await db.getPeriod(logLen));
      setLogCount(await db.count());
    };
    f();
  }, [logLen]);

  const data: TableData[] = React.useMemo(() => {
    return [...logTable].reverse().map(log => {
      const logConvert = new LogConvert(log);
      if (logConvert.isUseLog()) {
        return logConvert.historyTableText(dateType, roomType);
      }
      return {
        date: 'Null',
        building: 0,
        floor: 0,
        room: 'Null',
        seat: 'Null',
        campus: 'Null',
      };
    });
  }, [logTable, dateType, roomType]);

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
          backgroundColor={colors('buttonSecondly')}
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
        title: `${logLenText(logLenFast)}をコピーしました`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
    }
    setIsCopy(false);
  }, [isCopy]);

  return (
    <OtherPage title="履歴">
      <UtilButton onClick={onOpen}>
        <Text color={colors('textPrimary')}>フィルター</Text>
      </UtilButton>
      <CopyToClipboard
        onCopy={() => setIsCopy(true)}
        text={exportLog(logTable)}
      >
        <UtilButton>
          <Text color={colors('textPrimary')}>クリップボードにコピー</Text>
        </UtilButton>
      </CopyToClipboard>

      <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>フィルター</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody padding="1rem 2rem 1rem 2rem">
            <Box>{showButton()}</Box>
            <Divider colorScheme={colors('divider')} borderWidth="1px" />
            <HistorySettings
              isChecked={dateType}
              setIsChecked={setDateType}
              text="短い日時"
              id="shortDate"
            />
            <HistorySettings
              isChecked={roomType}
              setIsChecked={setRoomType}
              text="特殊な部屋名"
              id="uniqueRoom"
            />
            <Center margin="1rem 0 .5rem 0">
              <Text fontWeight="bold">
                表示ログ: {logLenText(logLenFast)} / 合計ログ数: {logCount}
              </Text>
            </Center>
            <Slider
              defaultValue={logLen}
              min={1}
              max={maxDay}
              step={0}
              onChange={value => {
                setLogLenFast(value);
              }}
              onChangeEnd={value => {
                setLogLen(value);
              }}
              isReadOnly={false}
              isDisabled={false}
            >
              <SliderTrack>
                <Box position="relative" right={10} />
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
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
                    backgroundColor={colors('mainSecondly')}
                    color={colors('textTertiary')}
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
    </OtherPage>
  );
};

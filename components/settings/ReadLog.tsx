import React from 'react';
import {Textarea, Box, Button, useToast} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';
import {logState, otherLogState} from '../../utils/recoilAtoms';
import {formatOtherLog} from '../../utils/formatUtil';
import * as colors from '../../utils/colors';

export const ReadLog = () => {
  const [log, setLog] = useRecoilState(logState);
  const [otherLog, setOtherLog] = useRecoilState(otherLogState);
  const toast = useToast();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOtherLog(event.target.value);
  };

  const handleChange = () => {
    if (otherLog === '') {
      toast({
        title: 'ログデータを入力してください',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    let isSuccess = false;
    const data = [...log];

    for (const element of otherLog.split('\n')) {
      const logData = formatOtherLog(element);
      if (logData) {
        console.log(logData);
        isSuccess = true;
        data.push(logData);
      }
    }

    if (isSuccess) {
      // 日付順にソート
      data.sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
      });
      setLog(data);
      toast({
        title: 'ログを更新しました。',
        status: 'info',
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'ログ更新に失敗しました。',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    setOtherLog('');
  };

  return (
    <Box>
      <Textarea
        placeholder="ログデータを入力"
        value={otherLog}
        onChange={handleInputChange}
        resize="none"
        height="10rem"
      />
      <Button
        onClick={handleChange}
        marginLeft="66%"
        color={colors.textPrimary}
        variant="ghost"
      >
        読み込む
      </Button>
    </Box>
  );
};

import React from 'react';
import {Textarea, Box, Button, useToast} from '@chakra-ui/react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {otherLogState, isCloud} from '../../utils/recoilAtoms';
import {formatOtherLog} from '../../utils/formatUtil';
import {colors} from '../../utils/colors';
import {DB} from '../../utils/db';
import useAddLog from '../../hooks/useAddLog';
import {DBLog} from '../../@types/log';

export const ReadLog = () => {
  const [otherLog, setOtherLog] = useRecoilState(otherLogState);
  const toast = useToast();

  const cloud = useRecoilValue(isCloud);
  const add = useAddLog();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOtherLog(event.target.value);
  };

  const handleChange = async () => {
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

    const db: DB = new DB('log');
    await db.openDB();

    const data: DBLog[] = [];

    for (const element of otherLog.split('\n')) {
      const logData = formatOtherLog(element);
      if (logData) {
        isSuccess = true;

        const dbData: DBLog = {
          label: logData.label,
          code: logData.code,
          type: logData.type,
          campus: logData.campus,
          date: new Date(logData.date),
        };

        data.push(dbData);

        try {
          await db.add(dbData);
        } catch (e) {
          null;
        }
      }
    }

    if (cloud) {
      add(data);
    }

    if (isSuccess) {
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
        color={colors('textPrimary')}
        variant="ghost"
      >
        読み込む
      </Button>
    </Box>
  );
};

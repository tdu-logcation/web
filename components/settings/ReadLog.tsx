import React from 'react';
import {Textarea, Box, Button, useToast} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';
import {otherLogState} from '../../utils/recoilAtoms';
import {formatOtherLog} from '../../utils/formatUtil';
import {colors} from '../../utils/colors';
import {DB} from '../../utils/db';

export const ReadLog = () => {
  const [otherLog, setOtherLog] = useRecoilState(otherLogState);
  const toast = useToast();

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

    for (const element of otherLog.split('\n')) {
      const logData = formatOtherLog(element);
      if (logData) {
        isSuccess = true;

        try {
          await db.add({
            label: logData.label,
            code: logData.code,
            type: logData.type,
            campus: logData.campus,
            date: new Date(logData.date),
          });
        } catch (e) {
          null;
        }
      }
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

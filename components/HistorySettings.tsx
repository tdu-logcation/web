import React from 'react';
import {FormControl, Switch, FormLabel} from '@chakra-ui/react';

export const HistorySettings: React.FC<{
  isChecked: boolean;
  setIsChecked: (
    valOrUpdater: boolean | ((currVal: boolean) => boolean)
  ) => void;
  text: string;
  id: string;
}> = ({isChecked, setIsChecked, text, id}) => {
  return (
    <FormControl
      display="flex"
      alignItems="center"
      margin=".5rem .2rem .5rem .2rem"
    >
      <Switch
        isChecked={isChecked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setIsChecked(event.target.checked);
        }}
        id={id}
        size="lg"
      />
      <FormLabel
        htmlFor={id}
        mb="0"
        marginLeft="1rem"
        fontSize="1.2em"
        fontWeight="bold"
      >
        {text}
      </FormLabel>
    </FormControl>
  );
};

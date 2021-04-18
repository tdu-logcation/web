/**!
 * Copyright (C) 2021 tdu-historylog project
 */
import QrReader from '../components/QrReader';
import React from 'react';

export default function Index() {
  const [data, setData] = React.useState<string>(null);
  return (
    <div>
      <QrReader setData={setData} />
      <p>{data}</p>
    </div>
  );
}

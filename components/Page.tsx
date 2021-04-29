import React from 'react';
import {Footer} from './Footer';

export const Page: React.FC = props => {
  return (
    <React.Fragment>
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

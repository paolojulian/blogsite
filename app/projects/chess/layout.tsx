import React, { FunctionComponent } from 'react';

export type ChessLayoutProps = {
  children: React.ReactNode;
};

const ChessLayout: FunctionComponent<ChessLayoutProps> = (props) => {
  return (
    <div
      className='w-screen h-screen overflow-hidden bg-gray-800'
      {...props}
    ></div>
  );
};

export default ChessLayout;

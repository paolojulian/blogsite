import React, { FunctionComponent } from 'react';

export type RootProps = {
  children: React.ReactNode;
};

const Root: FunctionComponent<RootProps> = (props) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
};

export default Root;

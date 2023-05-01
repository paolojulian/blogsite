import React, { FunctionComponent } from 'react';
import ModalBlurProvider from './ModalBlurProvider';
import QueryProvider from './QueryProvider';

export type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return (
    <QueryProvider>
      <ModalBlurProvider>{children}</ModalBlurProvider>
    </QueryProvider>
  );
};

export default Providers;

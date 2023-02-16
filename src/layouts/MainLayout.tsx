import Menu from 'features/menu/components/Menu';
import React, { FunctionComponent } from 'react';
import Row from './Row';
import Stack from './Stack';

export type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <Stack className='bg-primary-500 w-screen min-h-screen'>
      <Row className="flex-1">
        <Menu />
        <div className="pr-4 py-4 flex-1">
          <main className='bg-primary-50 w-full h-full rounded-[5rem] overflow-y-auto'>
            {children}
          </main>
        </div>
      </Row>
    </Stack>
  );
};

export default MainLayout;

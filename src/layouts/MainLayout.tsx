import Menu from "features/menu/components/Menu";
import React, { FunctionComponent } from "react";
import Row from "./Row";
import Stack from "./Stack";

export type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <Stack className="bg-[#181a25] w-screen max-h-screen">
      <Row className="flex-1">
        <Menu />
        <div className="pr-4 py-4 flex-1 h-screen">
          <main className="bg-gray-50 w-full h-full rounded-[5rem] overflow-y-auto overflow-x-hidden">
            {children}
          </main>
        </div>
      </Row>
    </Stack>
  );
};

export default MainLayout;

import React, { FunctionComponent } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export type DNDProviderProps = {
  children: React.ReactNode;
};

const DNDProvider: FunctionComponent<DNDProviderProps> = (props) => {
  return <DndProvider backend={HTML5Backend}>{props.children}</DndProvider>;
};

export default DNDProvider;

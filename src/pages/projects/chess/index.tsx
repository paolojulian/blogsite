import Game from 'features/projects/chess/components/Game';
import DNDProvider from 'features/projects/chess/providers/DNDProvider';
import React, { FunctionComponent } from 'react';

export type ProjectsChessPageProps = {
  // No Props
};

const ProjectsChessPage: FunctionComponent<ProjectsChessPageProps> = (
  props
) => {
  return (
    <DNDProvider>
      <Game />
    </DNDProvider>
  );
};

export default ProjectsChessPage;

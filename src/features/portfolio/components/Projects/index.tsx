import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';

export type ProjectsProps = {
  // No Props
};

const Projects: FunctionComponent<ProjectsProps> = () => {
  return (
    <>
      <div className='items-center bg-transparent text-white py-32 space-y-24'>
        <div className='max-w-screen-lg mx-auto w-full'>
          <Stack className='space-y-4'>
            <SectionHeader
              title='PROJECTS'
              description='Here are my recent works'
            />
          </Stack>
        </div>
        <div className='overflow-x-auto px-4 md:px-12 lg:px-20 xl:px-28 hidden-scrollbar'>
          <Row className='space-x-6 w-fit'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Row>
        </div>
      </div>
    </>
  );
};

export default Projects;

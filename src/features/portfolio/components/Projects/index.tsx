import DraggableHorizontalScroll from 'components/UI/DraggableHorizontalScroll';
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
        <DraggableHorizontalScroll>
          <div className='px-4 md:px-12 lg:px-20 xl:px-28'>
            <Row className='space-x-6 w-fit text-white px-4 md:px-12'>
              <ProjectCard
                title='Election App'
                description='NextJS, TailwindCSS'
              />
              <ProjectCard
                title='Dynamic Landing Page & Blogsite'
                description='NextJS, TailwindCSS, Contentful'
              />
              <ProjectCard
                title='Reservation App'
                description='NextJS, TailwindCSS, fabricJS'
              />
              <ProjectCard
                title='Web Business Management App'
                description='Laravel, VueJS, Stripe'
              />
              <ProjectCard
                title='Live Streaming App'
                description='ReactJS, Laravel, Stripe'
              />
              <ProjectCard title='Adult Site' description='CakePHP, Stripe' />
            </Row>
          </div>
        </DraggableHorizontalScroll>
      </div>
    </>
  );
};

export default Projects;

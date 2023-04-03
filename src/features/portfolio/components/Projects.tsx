import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import DayJS from 'lib/dayjs';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';

export type ProjectsProps = {
  // No Props
};

const yearStartedWorking = DayJS('2017-01-01');
const Projects: FunctionComponent<ProjectsProps> = (props) => {
  const now = DayJS();
  const yearsWorking = DayJS.duration(now.diff(yearStartedWorking)).years();
  return (
    <Stack className='items-center bg-transparent text-white py-24 gap-24'>
      <Stack className='gap-8 text-center  max-w-screen-lg px-12 mx-auto'>
        <h1 className='text-3xl font-bold tracking-wide uppercase'>
          Front-end Specialist
        </h1>
        <p className='text-gray-500 text-center'>
          I am a software engineer with {yearsWorking} years of experience. I
          excel in creating web apps using JavaScript frameworks, mostly using
          React.js and Vue.js. I started as a full-stack developer but now I
          want to continue to specialize in front-end development because it
          brings me joy and excitement. I have worked with different types of
          system, from Streaming sites, to gambling, school management, election
          site, ***n sites and others.
        </p>
      </Stack>
      <div className='max-w-full overflow-x-auto'>
        <Row className='gap-8'>
          <div className='w-[500px] h-[350px] bg-white'></div>
          <div className='w-[500px] h-[350px] bg-white'></div>
          {/* <div className='w-[500px] h-[350px] bg-white'></div>
          <div className='w-[500px] h-[350px] bg-white'></div> */}
        </Row>
      </div>
    </Stack>
  );
};

export default Projects;

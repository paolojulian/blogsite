import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import DayJS from 'lib/dayjs';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import SectionHeader from './common/SectionHeader';
import TextHighlight from './common/TextHighlight';

export type ProjectsProps = {
  // No Props
};

const yearStartedWorking = DayJS('2017-01-01');
const Projects: FunctionComponent<ProjectsProps> = () => {
  const now = DayJS();

  return (
    <Stack className='items-center bg-transparent text-white py-32 space-y-24'>
      <div className='max-w-screen-lg mx-auto'>
        <Stack className='space-y-12'>
          <Stack className='space-y-8'>
            <SectionHeader title='ABOUT' description='Software Engineer' />
            <p className='text-slate-500 text-left text-2xl'>
              Hi, I'm <TextHighlight>Paolo Vincent Julian</TextHighlight>, I
              started my journey on <TextHighlight>2017</TextHighlight>. I excel
              in creating responsive web-apps using JavaScript frameworks,
              particularly{' '}
              <TextHighlight textColor='text-blue-400'>React</TextHighlight> and{' '}
              <TextHighlight textColor='text-green-500'>Next.js</TextHighlight>.
              Although I was{' '}
              <TextHighlight textColor='text-slate-400'>
                {' '}
                full-stack developer
              </TextHighlight>
              , I decided to focus on{' '}
              <TextHighlight textColor='text-rose-400'>
                front-end development {`<3`}
              </TextHighlight>{' '}
              since it is more enjoyable and more fun. I enjoy helping others
              achieve their goals and is passionate in creating interesting
              applications.
            </p>
          </Stack>
          <button
            className='px-8 py-4 transition-colors bg-rose-400/90 hover:bg-rose-400 active:scale-[0.97] w-fit
            shadow-[0px_0px_6px_4px_rgba(232,121,249,0.1);]
          '
          >
            <span className='font-extrabold text-xl'>HIRE ME</span>
          </button>
        </Stack>
      </div>
    </Stack>
  );
};

export default Projects;

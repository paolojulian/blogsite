import AppButton from 'components/Buttons/AppButton';
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
            <SectionHeader
              title='ABOUT'
              description={`Hi! I am Paolo Vincent Julian`}
            />
            <p className='text-slate-500 text-left text-2xl'>
              I started my journey on <TextHighlight>2017</TextHighlight>. I
              excel in creating responsive web-apps using JavaScript frameworks,
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

          <AppButton block={false}>
            <span className='font-extrabold text-xl'>HIRE ME</span>
          </AppButton>
        </Stack>
      </div>
    </Stack>
  );
};

export default Projects;

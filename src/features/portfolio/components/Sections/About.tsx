import AppButton from 'components/Buttons/AppButton';
import FacebookIcon from 'components/Icons/FacebookIcon';
import GithubIcon from 'components/Icons/GithubIcon';
import LinkedInIcon from 'components/Icons/LinkedInIcon';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import SectionHeader from '../common/SectionHeader';
import TextHighlight from '../common/TextHighlight';

export type AboutProps = {
  // No Props
};

const About: FunctionComponent<AboutProps> = () => {
  return (
    <Stack className='items-center bg-transparent text-white py-60 space-y-24'>
      <div className='max-w-screen-lg mx-auto'>
        <Row className='items-center space-x-8'>
          <Stack className='justify-center items-center space-y-4'>
            <span className='writing-vertical text-slate-400'>Follow me</span>
            <span className='w-1 h-20 border-l border-l-slate-400'></span>
            <Stack className='space-y-2'>
              <FacebookIcon />
              <GithubIcon />
              <LinkedInIcon />
            </Stack>
          </Stack>
          <Stack className='space-y-12 flex-1'>
            <Stack className='space-y-8'>
              <SectionHeader
                title='PAOLO VINCENT JULIAN'
                description={
                  <Row>
                    I am a<span className="text-red-500">&nbsp;Software Engineer</span>
                  </Row>
                }
              />
              <p className='text-slate-500 text-left text-2xl'>
                I started my journey on <TextHighlight>2017</TextHighlight>. I
                excel in creating responsive web-apps using JavaScript
                frameworks, particularly{' '}
                <TextHighlight textColor='text-blue-400'>React</TextHighlight>{' '}
                and{' '}
                <TextHighlight textColor='text-green-500'>
                  Next.js
                </TextHighlight>
                . Although I was{' '}
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
        </Row>
      </div>
    </Stack>
  );
};

export default About;

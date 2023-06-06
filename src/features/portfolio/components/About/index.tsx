import AnimateOnIntersect, {
  AnimateOnIntersectContext,
} from 'components/Animations/AnimateOnIntersect';
import AppButton from 'components/Buttons/AppButton';
import FacebookIcon from 'components/Icons/FacebookIcon';
import GithubIcon from 'components/Icons/GithubIcon';
import LinkedInIcon from 'components/Icons/LinkedInIcon';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import TextHighlight from '../common/TextHighlight';
import AboutSectionHeader from './SectionHeader';

export type AboutProps = {
  // No Props
};

const About: FunctionComponent<AboutProps> = () => {
  return (
    <section id='about'>
      <Stack className='items-center bg-transparent text-white py-60 space-y-24'>
        <div className='max-w-screen-lg mx-auto'>
          <Row className='items-center space-x-8'>
            <AnimateOnIntersect type='fadeFromRight'>
              <Stack className='justify-center items-center space-y-4'>
                <span className='writing-vertical text-slate-400'>
                  Follow me
                </span>
                <span className='w-1 h-20 border-l border-l-slate-400'></span>
                <Stack className='space-y-2'>
                  <a
                    href='https://www.facebook.com/profile.php?id=100078321445396'
                    target='_blank'
                    className='hover:scale-125 transition-transform'
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href='https://github.com/paolojulian'
                    target='_blank'
                    className='hover:scale-125 transition-transform'
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/pipz/'
                    target='_blank'
                    className='hover:scale-125 transition-transform'
                  >
                    <LinkedInIcon />
                  </a>
                </Stack>
              </Stack>
            </AnimateOnIntersect>
            <Stack className='space-y-12 flex-1'>
              <Stack className='space-y-8'>
                <AnimateOnIntersect>
                  <AnimateOnIntersectContext.Consumer>
                    {({ isInView }) => (
                      <AboutSectionHeader mounted={!!isInView} />
                    )}
                  </AnimateOnIntersectContext.Consumer>
                </AnimateOnIntersect>
                <AnimateOnIntersect>
                  <p className='text-slate-500 text-left text-2xl'>
                    Experienced since <TextHighlight>2017</TextHighlight>, I am
                    a<TextHighlight> full-stack developer</TextHighlight> who
                    specialize in{' '}
                    <TextHighlight>front-end development</TextHighlight> and
                    thrive on crafting captivating user experiences. I enjoy
                    tackling challenging projects that push my knowledge to the
                    limit, while embracing the elegance of simple yet complex
                    designs.
                  </p>
                </AnimateOnIntersect>
              </Stack>

              <AnimateOnIntersect>
                <AppButton block={false} rounded='none' theme='borders'>
                  <span className='font-extrabold text-xl'>HIRE ME</span>
                </AppButton>
              </AnimateOnIntersect>
            </Stack>
          </Row>
        </div>
      </Stack>
    </section>
  );
};

export default About;

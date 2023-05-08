import DraggableHorizontalScroll from 'components/UI/DraggableHorizontalScroll';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectItem from './ProjectItem';

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
              {/* GoElect */}
              <ProjectCard
                title='Election App'
                description='NextJS, TailwindCSS'
              >
                <>
                  <ProjectItem
                    type='web'
                    width='w-[344px]'
                    ImageComponent={
                      <Image
                        src={
                          '/assets/portfolio/projects/goelect/web_goelect.jpg'
                        }
                        alt={'GoElect'}
                        width={344}
                        height={273}
                        quality={90}
                      />
                    }
                  />
                  <ProjectItem
                    type='mobile'
                    width='w-[138px]'
                    ImageComponent={
                      <Image
                        src={
                          '/assets/portfolio/projects/goelect/mobile_goelect.jpg'
                        }
                        alt={'GoElect'}
                        width={138}
                        height={300}
                        quality={90}
                      />
                    }
                  />
                  <ProjectItem
                    type='web'
                    width='w-[248px]'
                    ImageComponent={
                      <Image
                        src={
                          '/assets/portfolio/projects/goelect/web_goelect1.jpg'
                        }
                        alt={'GoElect'}
                        width={248}
                        height={273}
                        quality={90}
                      />
                    }
                  />
                </>
              </ProjectCard>
              {/* PerformanceDepot */}
              <ProjectCard
                title='Dynamic Landing Page & Blogsite'
                description='NextJS, TailwindCSS, Contentful'
              >
                <>
                  <ProjectItem
                    type='web'
                    width='w-[413px]'
                    ImageComponent={
                      <Image
                        src={
                          '/assets/portfolio/projects/performance_depot/web.jpg'
                        }
                        alt={'GoElect'}
                        width={413}
                        height={273}
                        quality={90}
                      />
                    }
                  />
                  <ProjectItem
                    type='mobile'
                    width='w-[138px]'
                    ImageComponent={
                      <Image
                        src={
                          '/assets/portfolio/projects/performance_depot/mobile.jpg'
                        }
                        alt={'GoElect'}
                        width={138}
                        height={300}
                        quality={90}
                      />
                    }
                  />
                  <ProjectItem
                    type='web'
                    width='w-[410px]'
                    ImageComponent={
                      <Image
                        src={
                          '/assets/portfolio/projects/performance_depot/web2.jpg'
                        }
                        alt={'GoElect'}
                        width={410}
                        height={273}
                        quality={90}
                      />
                    }
                  />
                </>
              </ProjectCard>

              {/* GoReserve */}
              <ProjectCard
                title='Reservation App'
                description='NextJS, TailwindCSS, fabricJS'
              >
                <>
                  <ProjectItem
                    type='mobile'
                    width='w-[138px]'
                    ImageComponent={
                      <Image
                        src={'/assets/portfolio/projects/goreserve/mobile.png'}
                        alt={'GoElect'}
                        width={138}
                        height={300}
                      />
                    }
                  />
                  <ProjectItem
                    type='mobile'
                    width='w-[138px]'
                    ImageComponent={
                      <Image
                        src={'/assets/portfolio/projects/goreserve/mobile2.png'}
                        alt={'GoElect'}
                        width={138}
                        height={300}
                      />
                    }
                  />
                  <ProjectItem
                    type='mobile'
                    width='w-[138px]'
                    ImageComponent={
                      <Image
                        src={'/assets/portfolio/projects/goreserve/mobile3.png'}
                        alt={'GoElect'}
                        width={138}
                        height={273}
                        quality={90}
                      />
                    }
                  />
                  <ProjectItem
                    type='mobile'
                    width='w-[138px]'
                    ImageComponent={
                      <Image
                        src={'/assets/portfolio/projects/goreserve/mobile4.png'}
                        alt={'GoElect'}
                        width={138}
                        height={273}
                        quality={90}
                      />
                    }
                  />
                </>
              </ProjectCard>

              {/* Leapy */}
              <ProjectCard
                title='Web Business Management App'
                description='Laravel, VueJS, Stripe'
              >
                <>
                  <ProjectItem
                    type='web'
                    width='w-[494px]'
                    ImageComponent={
                      <Image
                        src={
                          '/assets/portfolio/projects/web_business_management/web.jpg'
                        }
                        alt={'web_business_management'}
                        width={494}
                        height={300}
                      />
                    }
                  />
                </>
              </ProjectCard>
              <ProjectCard
                title='Live Streaming App'
                description='ReactJS, Laravel, Stripe'
              ></ProjectCard>
              <ProjectCard title='Adult Site' description='CakePHP, Stripe' />
            </Row>
          </div>
        </DraggableHorizontalScroll>
      </div>
    </>
  );
};

export default Projects;

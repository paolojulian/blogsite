import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import CareerCardHeader from './CareerCardHeader';
import AnimateOnIntersect from 'components/Animations/AnimateOnIntersect';
import CareerTechCard from './CareerTechCard';
import Image from 'next/image';

export type CareerCardProps = {
  DescriptionComponent: React.ReactNode;
  HeaderComponent: React.ReactNode;
  apps: string[];
  TechsComponent?: React.ReactNode;
  TechIcons?: Array<string | null>;
};

interface SubComponents {
  Header: typeof CareerCardHeader;
}

const CareerCard: FunctionComponent<CareerCardProps> & SubComponents = ({
  DescriptionComponent,
  HeaderComponent,
  apps,
  TechsComponent = null,
  TechIcons = [],
}) => {
  return (
    <Row className='h-full'>
      <Stack className='items-center min-h-full pt-4 pr-12 space-y-4'>
        {/* Icon */}
        <div className='w-8 h-8 rounded-full bg-slate-50 shadow-[0_0_10px_10px_rgb(255,255,255,0.15)]'></div>
        {/* Line */}
        <div className='flex-1 w-1 rounded-full bg-slate-50'>&nbsp;</div>
      </Stack>
      <div className='flex-1 mb-24'>
        <Stack className='space-y-7'>
          <AnimateOnIntersect type='fadeFromRight'>
            <Stack className='space-y-2'>
              {HeaderComponent}
              <div className='text-slate-500 text-2xl font-base'>
                {DescriptionComponent}
              </div>
            </Stack>
          </AnimateOnIntersect>
          <AnimateOnIntersect type='fadeFromRight'>
            <Row className='flex-wrap gap-2'>
              {apps.map((app, i) => (
                <ul
                  className='text-sm px-5 py-2 text-slate-500 border border-slate-500 rounded-3xl'
                  key={i}
                >
                  {app}
                </ul>
              ))}
            </Row>
          </AnimateOnIntersect>
        </Stack>
      </div>
      {TechsComponent ? (
        <div className='flex-1 -skew-y-3'>{TechsComponent}</div>
      ) : null}
      {TechIcons.length > 0 ? (
        <div className='flex-1 -skew-y-1'>
          <Stack className='items-center space-y-3'>
            <Row className='space-x-3'>
              {[...TechIcons.slice(0, 3)].map((icon, i) => {
                if (!icon) {
                  return (
                    <span className='opacity-0' key={i}>
                      <CareerTechCard Image={<></>}></CareerTechCard>
                    </span>
                  );
                }
                return (
                  <AnimateOnIntersect key={i} delay={200 * i}>
                    <CareerTechCard
                      Image={
                        <Image
                          src={icon}
                          alt='TechIcon'
                          width={60}
                          height={60}
                        />
                      }
                    />
                  </AnimateOnIntersect>
                );
              })}
            </Row>
            <Row className='space-x-3'>
              {[...TechIcons.slice(-2)].map((icon, i) => {
                if (!icon) {
                  return (
                    <span className='opacity-0'>
                      <CareerTechCard Image={<></>}></CareerTechCard>
                    </span>
                  );
                }
                return (
                  <AnimateOnIntersect key={i} delay={200 * (i + 2)}>
                    <CareerTechCard
                      Image={
                        <Image
                          src={icon}
                          alt='TechIcon'
                          width={60}
                          height={60}
                        />
                      }
                    />
                  </AnimateOnIntersect>
                );
              })}
            </Row>
          </Stack>
        </div>
      ) : null}
    </Row>
  );
};

CareerCard.Header = CareerCardHeader;

export default CareerCard;

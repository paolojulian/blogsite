import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import CareerCardHeader from './CareerCardHeader';

export type CareerCardProps = {
  DescriptionComponent: React.ReactNode;
  HeaderComponent: React.ReactNode;
  TechsComponent: React.ReactNode;
  apps: string[];
};

interface SubComponents {
  Header: typeof CareerCardHeader;
}

const CareerCard: FunctionComponent<CareerCardProps> & SubComponents = ({
  DescriptionComponent,
  HeaderComponent,
  TechsComponent,
  apps,
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
          <Stack className='space-y-2'>
            {HeaderComponent}
            <div className='text-slate-500 text-2xl font-base'>
              {DescriptionComponent}
            </div>
          </Stack>
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
        </Stack>
      </div>
      <div className='flex-1'>{TechsComponent}</div>
    </Row>
  );
};

CareerCard.Header = CareerCardHeader;

export default CareerCard;

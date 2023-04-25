import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import CareerCardHeader from './CareerCardHeader';

export type CareerCardProps = {
  DescriptionComponent: React.ReactNode;
  HeaderComponent: React.ReactNode;
  apps: string[];
};

interface SubComponents {
  Header: typeof CareerCardHeader;
}

const CareerCard: FunctionComponent<CareerCardProps> & SubComponents = ({
  DescriptionComponent,
  HeaderComponent,
  apps,
}) => {
  return (
    <Row>
      <div className='flex-1'>
        <Stack className="space-y-7">
          <Stack className='space-y-2'>
            {HeaderComponent}
            <div className='text-slate-500 text-2xl font-base'>
              {DescriptionComponent}
            </div>
          </Stack>
          <Row className="flex-wrap gap-2">
            {apps.map((app, i) => (
              <ul className='text-sm px-5 py-2 text-slate-500 border border-slate-500 rounded-3xl' key={i}>
                {app}
              </ul>
            ))}
          </Row>
        </Stack>
      </div>
      <div className='flex-1'></div>
    </Row>
  );
};

CareerCard.Header = CareerCardHeader;

export default CareerCard;

import classNames from 'classnames';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';

export type ProjectCardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div
      className={classNames(
        'h-[350px] w-[475px]',
        'relative',
        'bg-[linear-gradient(207.99deg,_rgba(248,250,252,0.2)_13.77%,rgba(248,250,252,0)_173.77%)]',
        'border border-white/10'
      )}
    >
      {/* Contents */}
      <div className='w-full h-full overflow-x-auto hidden-scrollbar p-[25px]'>
        <Row className='space-x-4 w-fit h-full flex-nowrap'>{children}</Row>
      </div>
      {/* Overlay */}
      <div className='absolute inset-0 w-full h-full bg-gradient-to-t from-bg  to-transparent pointer-events-none'>
        <Stack className='justify-end h-full p-4'>
          <h3 className='font-bold text-base'>{title}</h3>
          <p className='font-base text-sm text-slate-400'>{description}</p>
        </Stack>
      </div>
    </div>
  );
};

export default ProjectCard;

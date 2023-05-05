import classNames from 'classnames';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';

export type ProjectCardProps = {
  title: string;
  description: string;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  description,
}) => {
  return (
    <div
      className={classNames(
        'h-[350px] w-[475px]',
        'relative',
        'bg-[linear-gradient(207.99deg,_rgba(248,250,252,0.2)_13.77%,rgba(248,250,252,0)_173.77%)]',
        'border border-gray-600'
      )}
    >
      {/* Overlay */}
      <div className='absolute inset-0 w-full h-full bg-gradient-to-t from-bg via-transparent to-transparent'>
        <Stack className='justify-end h-full p-4'>
          <h3 className='font-bold text-base'>{title}</h3>
          <p className='font-base text-sm text-slate-400'>{description}</p>
        </Stack>
      </div>
    </div>
  );
};

export default ProjectCard;

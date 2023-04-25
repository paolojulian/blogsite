import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';

export type SectionHeaderProps = {
  title: string;
  description: string;
};

const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <Stack>
      <h4 className='text-slate-600 font-extrabold text-xl'>{title}</h4>
      <h2 className='text-slate-50 font-bold tracking-wide text-4xl'>
        {description}
      </h2>
    </Stack>
  );
};

export default SectionHeader;

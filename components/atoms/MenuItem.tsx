import React, { FunctionComponent } from 'react';
import FabButton, { FabButtonProps } from './FabButton';

export type MenuItemProps = {
  Icon?: React.ReactNode;
  label?: string;
} & FabButtonProps;

const MenuItem: FunctionComponent<MenuItemProps> = ({
  Icon,
  label,
  ...props
}) => {
  return (
    <>
      <div className='group relative w-full flex items-center justify-center'>
        <FabButton {...props}>{Icon}</FabButton>
        <div
          role='tooltip'
          className='z-50 inline-block whitespace-nowrap absolute top-1/2 -translate-y-1/2 -translate-x-2 w-fit left-full transition-opacity ml-2 py-2 px-3 invisible group-hover:visible text-sm font-medium text-white dark:text-gray-800 bg-gray-800 dark:bg-white rounded-lg tooltip '
        >
          {label}
          <div className='tooltip-arrow' data-popper-arrow></div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;

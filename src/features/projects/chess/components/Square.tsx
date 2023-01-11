import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export type SquareProps = {
  children: React.ReactNode;
  isDark: boolean;
};

const Square: FunctionComponent<SquareProps> = ({ children, isDark }) => {
  return (
    <div
      className={classNames(
        'w-full h-full',
        'overflow-hidden',
        'transition-colors cursor-pointer',
        'border-pink-400/25 border group hover:border-pink-400',
        'p-2',
        'select-none'
      )}
    >
      <div
        className={classNames(
          'w-full h-full transition-colors flex items-center justify-center',
          isDark ? '' : 'bg-pink-400/25 group-hover:bg-pink-400'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Square;

import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes, useMemo } from 'react';

export type RowProps = {
  gap?: number;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Row: FunctionComponent<RowProps> = ({ children, gap = 0, className = '', ...props }) => {
  const gapStyle = useMemo(() => {
    return `space-x-${gap}`;
  }, [gap]);

  return (
    <div className={classNames('flex flex-row', gapStyle, className)} {...props}>
      {children}
    </div>
  );
};

export default Row;

import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes, useMemo } from 'react';

export type StackProps = {
  gap?: number;
  children?: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Stack: FunctionComponent<StackProps> = ({ children, gap = 0, className = '', ...props }) => {
  const gapStyle = useMemo(() => {
    return `space-y-${gap}`;
  }, [gap]);

  return (
    <div className={classNames('flex flex-col', gapStyle, className)} {...props}>
      {children}
    </div>
  );
};

export default Stack;

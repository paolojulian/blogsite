import classNames from 'classnames';
import Row from 'layouts/Row';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
// import Spinner from "../Spinners/Spinner";

export type AppButtonProps = {
  theme?: Theme;
  size?: Size;
  block?: boolean;
  isLoading?: boolean;
  rounded?: RoundedCorner;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type RoundedCorner = 'full' | 'bottom' | 'top' | 'none';
type Theme = 'primary' | 'primaryOutline' | 'red' | 'black';
type Size = 'sm' | 'base' | 'lg';

const backgroundMap: Record<Theme, string> = {
  primary: classNames('text-white', 'bg-rose-400 hover:bg-rose-500'),
  primaryOutline: classNames(
    'border border-primary-500 hover:bg-primary-500 active:bg-primary-600 active:border-primary-600',
    'text-primary-500 hover:text-white'
  ),
  red: 'bg-red-400 hover:bg-red-500 text-white',
  black: 'bg-black hover:bg-gray-900 text-white font-bold',
};
const disabledMap: Record<Theme, string> = {
  primary: 'bg-gray-200 text-gray-400',
  primaryOutline: classNames('border border-gray-300 text-gray-400'),
  red: 'bg-red-200',
  black: 'bg-black hover:bg-gray-900 text-white font-bold',
};

const roundedMap: Record<RoundedCorner, string> = {
  full: 'rounded-3xl',
  bottom: 'rounded-b-3xl',
  top: 'rounded-t-3xl',
  none: '',
};

const sizeMap: Record<Size, string> = {
  sm: 'py-2',
  base: 'h-14',
  lg: 'h-16',
};

const AppButton: FunctionComponent<AppButtonProps> = ({
  block = true,
  disabled = false,
  isLoading = false,
  rounded = 'full',
  size = 'base',
  theme = 'primary',
  children,
  ...props
}) => {
  if (isLoading) {
    return (
      <Row className={classNames('justify-center items-center', sizeMap[size])}>
        Loading...
        {/**<Spinner className="w-8 h-8 stroke-primary-500" /> */}
      </Row>
    );
  }
  return (
    <button
      {...props}
      className={classNames(
        'px-12 py-2 text-center',
        'transition-colors scale-100',
        sizeMap[size],
        roundedMap[rounded],
        !disabled && 'active:scale-[0.99]',
        disabled ? disabledMap[theme] : backgroundMap[theme],
        block ? 'w-full' : 'w-fit'
      )}
      disabled={disabled}
    >
      <Row className='flex-1 justify-center items-center h-full w-full'>
        {children}
      </Row>
    </button>
  );
};

export default AppButton;

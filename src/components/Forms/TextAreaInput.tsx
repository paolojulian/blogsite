import classNames from 'classnames';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent, TextareaHTMLAttributes } from 'react';

type TextAreaInputTheme = 'default' | 'white';

export type TextAreaInputProps = {
  label: string;
  error?: string | boolean;
  theme?: TextAreaInputTheme;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const colorTheme: Record<TextAreaInputTheme, string> = {
  default: 'bg-slate-100 hover:bg-slate-200/80',
  white: 'bg-white hover:bg-slate-200',
};

const TextAreaInput: FunctionComponent<TextAreaInputProps> = ({
  label,
  error = false,
  theme = 'default',
  ...props
}) => {
  const willShow = true;

  return (
    <Stack className='space-y-1'>
      <div
        className={classNames(
          'rounded-lg transition-colors relative group',
          !!error ? 'bg-red-100 hover:bg-red-200/80' : colorTheme[theme],
          !!error ? 'ring-2 ring-red-500' : ''
        )}
      >
        <Stack className='absolute inset-0 h-full justify-center px-5 z-0 pointer-events-none text-left w-fit'>
          <Row
            className={classNames(
              'items-center space-x-2',
              'transition-transform',
              willShow ? 'opacity-0 scale-0' : 'opacity-1 scale-100'
            )}
          >
            <label
              className={classNames(
                'font-medium tracking-wide',
                'text-gray-500'
              )}
              htmlFor={props.name}
            >
              {label}
            </label>
          </Row>
        </Stack>
        <Stack className='z-10'>
          <label
            className={classNames(
              'transition-transform',
              'absolute top-2 left-3',
              willShow ? 'opacity-1 scale-100' : 'opacity-0 scale-0',
              'uppercase font-bold text-xs tracking-wide',
              'text-primary-800'
            )}
            htmlFor={props.name}
          >
            {label}
          </label>
          <textarea
            className={classNames(
              'transition-opacity',
              'rounded-lg bg-transparent pt-6 pb-3 px-3',
              'font-medium text-gray-800',
              'resize-none',
              willShow ? 'opacity-1' : 'opacity-0'
            )}
            {...props}
          ></textarea>
        </Stack>
      </div>
    </Stack>
  );
};

export default TextAreaInput;

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, FunctionComponent, useCallback } from 'react';
import { ExtractProps } from '../../lib/helpers';
import CloseIcon from '../atoms/CloseIcon';

export type ModalProps = {
  title?: string;
  subtitle?: string;
  size?: string;
  children?: React.ReactNode;
  type?: 'Info' | 'Alert' | 'Dialog';
} & ExtractProps<typeof Dialog>;

const Modal: FunctionComponent<ModalProps> = ({
  title,
  subtitle,
  children,
  size = 'max-w-2xl',
  type = 'Alert',
  open = false,
  onClose = () => {
    // Empty
  },
  ...props
}) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog className='relative z-50' onClose={onClose} {...props}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/75' aria-hidden='true' />
        </Transition.Child>

        {/* Content */}
        <div className='fixed inset-0 flex items-center justify-center p-4'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel
              className={`${size} w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg relative`}
            >
              {(title || subtitle) && (
                <div className='border-b border-gray-700 pb-4 mb-4'>
                  <Dialog.Title className='font-bold text-3xl text-gray-900 dark:text-white'>
                    {title}
                  </Dialog.Title>
                  <Dialog.Description className='text-gray-500'>
                    {subtitle}
                  </Dialog.Description>
                </div>
              )}

              <div className='absolute top-4 right-4'>
                <button
                  className='p-1 transition-colors group bg-red-500 hover:bg-red-700 rounded-full'
                  onClick={useCallback(() => onClose(false), [onClose])}
                >
                  <CloseIcon className='h-3 w-3 transition-colors text-red-500 group-hover:text-white' />
                </button>
              </div>

              <div className=''>{children}</div>

              <div className='flex justify-end space-x-2 mt-8'>
                {type === 'Dialog' && (
                  <button className='py-2 px-4 transition-colors bg-gray-700 hover:bg-gray-900 text-white rounded-lg'>
                    Cancel
                  </button>
                )}
                {type !== 'Info' && (
                  <button className='py-2 px-4 transition-colors bg-blue-500 hover:bg-blue-700 text-white rounded-lg'>
                    Ok
                  </button>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;

import classNames from 'classnames';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import useContactForm from '../../hooks/useContactForm';
import SectionHeader from '../common/SectionHeader';
import ContactForm from './ContactForm';

export type ContactProps = {
  name: string;
  course: string;
  email: string;
  mobileNo: string;
  address: string;
};

const Contact: FunctionComponent<ContactProps> = () => {
  const { handleSubmit, isLoading } = useContactForm();

  return (
    <>
      <Stack className='items-center bg-white text-gray-900 -pt-32 pb-24 gap-24 relative'>
        {/** Separator */}
        <div
          className={classNames(
            'absolute top-0 inset-x-0',
            'w-0 h-0',
            'border-r-[100vw] border-r-transparent border-b-[13.9vw] border-b-white',
            'mt-[-13.8vw]'
          )}
        ></div>
        {/** Content */}
        <Stack className='z-10 space-y-16 w-full'>
          <Stack className='space-y-2 max-w-screen-lg mx-auto w-full px-8'>
            <SectionHeader
              title='CONTACT'
              description='I would love to hear from you.'
              theme='light'
            ></SectionHeader>
          </Stack>
          <ContactForm onSubmit={handleSubmit} isSubmitting={isLoading} />
          <Stack className='max-w-screen-md w-full py-4 px-8 mx-auto space-y-8 items-center'>
            <div className='w-full border border-t-gray-100' />
            <h4 className='text-slate-900 text-base font-medium'>
              Copyright © 2017-2023 Paolo Vincent Julian. All rights reserved.
            </h4>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Contact;

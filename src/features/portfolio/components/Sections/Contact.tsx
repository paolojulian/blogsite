import classNames from 'classnames';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import useContactForm from '../../hooks/useContactForm';
import ContactForm from '../Forms/ContactForm';
import SectionHeader from '../common/SectionHeader';

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
      <Stack className='items-center bg-slate-100 text-gray-900 -pt-32 pb-24 gap-24 relative'>
        {/** Separator */}
        <div
          className={classNames(
            'absolute top-0 inset-x-0',
            'w-0 h-0',
            'border-r-[100vw] border-r-transparent border-b-[13.9vw] border-b-slate-100',
            'mt-[-13.8vw]'
          )}
        ></div>
        {/** Content */}
        <Stack className='z-10 space-y-16 w-full'>
          <Stack className='space-y-2 text-center  max-w-screen-lg px-12 mx-auto'>
            <SectionHeader
              title='CONTACT'
              description='Have a question or want to work together?'
              theme='light'
            ></SectionHeader>
          </Stack>
          <ContactForm onSubmit={handleSubmit} isSubmitting={isLoading} />
          <Stack className='max-w-screen-md w-full py-4 px-8 mx-auto space-y-8 items-center'>
            <div className='w-full border border-t-gray-100' />
            <Row className='space-x-4 justify-center'>
              <div className='rounded-full h-12 w-12 relative'>
                <Image
                  src={'/assets/portfolio/logo-facebook.svg'}
                  alt='Facebook'
                  fill
                />
              </div>
              <div className='rounded-full h-12 w-12 relative'>
                <Image
                  src={'/assets/portfolio/logo-github.svg'}
                  alt='Facebook'
                  fill
                />
              </div>
              <div className='rounded-full h-12 w-12 relative'>
                <Image
                  src={'/assets/portfolio/logo-linkedin.svg'}
                  alt='Facebook'
                  fill
                />
              </div>
            </Row>
            <h4 className='text-primary-600'>
              Paolo Vincent Julian <span className=''>© 2017</span>
            </h4>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Contact;

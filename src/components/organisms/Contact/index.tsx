import React, { FunctionComponent } from 'react';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';

export type ContactProps = {
  // No Props
};

const Contact: FunctionComponent<ContactProps> = (props) => {
  return (
    <div className='mt-12 w-full'>
      <div className='text-left font-bold text-lg mb-2'>
        Have some questions?
      </div>
      <form
        className='flex flex-col space-y-2 w-full'
        onSubmit={(e) => e.preventDefault()}
      >
        <Input label='Email Address' placeholder='Enter your email' />
        <Input label='Name' placeholder='Enter your name' />
        <TextArea
          label={'Message'}
          placeholder={'Enter your message'}
          rows={8}
          openByDefault
        />
        <button
          type='submit'
          className='p-2 w-full bg-gray-800 dark:bg-gray-50 hover:bg-gray-700 dark:hover:bg-gray-300 transition rounded-sm'
        >
          <span className='uppercase font-bold text-white dark:text-gray-900'>
            Send
          </span>
        </button>
      </form>
    </div>
  );
};

export default Contact;

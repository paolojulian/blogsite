import React, { FunctionComponent } from 'react';

export type ContactProps = {
  // No Props
};

const Contact: FunctionComponent<ContactProps> = (props) => {
  return (
    <div className='mt-12 w-full'>
      <div className='text-left font-bold text-lg mb-2'>
        Want to work with me?
      </div>
      <form
        className='flex flex-col space-y-2 w-full'
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          placeholder='Your Email Address'
          className='bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-500 rounded-lg p-2 w-full'
        ></input>
        <input
          placeholder='Your Name'
          className='bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-500 rounded-lg p-2 w-full'
        ></input>
        <textarea
          placeholder='Enter your message'
          className='bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-500 p-2 rounded-lg w-full'
          rows={16}
        ></textarea>
        <button
          type='submit'
          className='p-2 w-full bg-gray-800 dark:bg-gray-50 hover:bg-gray-700 dark:hover:bg-gray-300 transition rounded-xl'
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

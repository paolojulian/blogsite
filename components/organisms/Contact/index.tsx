import React, { FunctionComponent } from 'react';

export type ContactProps = {
  // No Props
};

const Contact: FunctionComponent<ContactProps> = (props) => {
  return (
    <div className='py-4 md:py-8 px-4 sticky top-0'>
      <div className='w-40 h-40 rounded-lg mb-2 bg-gray-200 dark:bg-gray-700'></div>
      <div>
        <h2 className='text-xl font-semibold'>
          Paolo Vincent Julian
        </h2>
        <h3 className='text-gray-400 dark:text-gray-500'>Software Engineer</h3>
      </div>
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
            <span className="uppercase font-bold text-white dark:text-gray-900">Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

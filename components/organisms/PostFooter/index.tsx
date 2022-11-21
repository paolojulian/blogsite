import React, { FunctionComponent } from 'react';
import SectionTitle from '../../atoms/SectionTitle';
import Container from '../../container';

export type PostFooterProps = {
  // No Props
};

const PostFooter: FunctionComponent<PostFooterProps> = (props) => {
  return (
    <Container>
      <div className='mt-12'>
        <SectionTitle>Write me a comment:</SectionTitle>

        <textarea
          className='w-full p-4 border border-gray-400 rounded-lg'
          placeholder={`Say something...`}
          rows={8}
        />
        <button
          type='submit'
          className='rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-2'
        >
          <span className='uppercase text-white'>SEND</span>
        </button>
      </div>
    </Container>
  );
};

export default PostFooter;

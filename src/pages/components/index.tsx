import SectionTitle from 'components/atoms/SectionTitle';
import Subtitle from 'components/atoms/Subtitle';
import Title from 'components/atoms/Title';
import Container from 'components/container';
import MainLayout from 'components/layouts/Main';
import PostCard from 'components/molecules/PostCard';
import apiClient from 'lib/axios';
import { Post } from 'lib/models';
import React, { FunctionComponent } from 'react';
import { components } from 'utils/mock/components';

export type ComponentsProps = {
  preview?: boolean;
  data: Post[];
};

const Components: FunctionComponent<ComponentsProps> = ({ data, preview }) => {
  return (
    <MainLayout preview={preview}>
      <Container>
        <div className='pb-8'>
          <Title>Components</Title>
          <Subtitle>
            My custom components mostly built with tailwindcss
          </Subtitle>
        </div>

        <div className='w-full h-0.5 bg-gray-100 rounded-xl'></div>

        {/* List */}
        <div>
          {components.map((component) => (
            <>
              <div className='mt-8'>
                <h3 className='text-gray-800 font-semibold text-lg'>
                  {component.section}
                </h3>
                <div className='grid grid-cols-3 gap-1 my-4'>
                  {component.components.map((title) => (
                    <div className='w-full hover:bg-gray-50 transition cursor-pointer p-2'>
                      <div className='w-full h-44 bg-gray-100 rounded-lg'></div>
                      <div className='py-4 px-1'>
                        <div className='font-medium text-gray-800'>{title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='w-full h-0.5 bg-gray-100 rounded-xl'></div>
            </>
          ))}
        </div>
      </Container>
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const response = await apiClient.get('/api/posts');
  if (!response.ok) {
    throw new Error();
  }

  return { props: { data: response.data } };
}

export default Components;

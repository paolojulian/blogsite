import SectionTitle from 'components/atoms/SectionTitle';
import Subtitle from 'components/atoms/Subtitle';
import Title from 'components/atoms/Title';
import Container from 'components/container';
import PostCard from 'components/molecules/PostCard';
import ComponentsPage from 'features/components/pages';
import MainLayout from 'layouts/MainLayout';
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
    <MainLayout>
      <ComponentsPage />
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

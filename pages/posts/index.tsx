import React, { FunctionComponent } from 'react';
import Layout from '../../components/layout';
import PostCard from '../../components/molecules/PostCard';
import apiClient from '../../lib/axios';
import { Post } from '../../lib/models';

export type PostListProps = {
  preview?: boolean;
  data: Post[];
};

const PostList: FunctionComponent<PostListProps> = ({ data, preview }) => {
  return (
    <Layout preview={preview}>
      <>
        {data.map((post) => (
          <PostCard key={post.id} post={post} href='/posts/lorem-ipsum' />
        ))}
      </>
    </Layout>
  );
};

export async function getServerSideProps() {
  const response = await apiClient.get('/api/posts');
  if (!response.ok) {
    throw new Error();
  }

  return { props: { data: response.data } };
}

export default PostList;

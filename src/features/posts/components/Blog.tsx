import { CMS_NAME } from 'lib/constants';
import Head from 'next/head';
import React, { FunctionComponent, useMemo } from 'react';
import { usePost } from '../providers';
import BlogHeader from './BlogHeader';

export type BlogProps = {
  // No Props
};

const Blog: FunctionComponent<BlogProps> = (props) => {
  const { selectedPost: post } = usePost();

  return (
    <article className='mb-32'>
      <Head>
        <title>
          {post.title} | {CMS_NAME}
        </title>
        <meta property='og:image' content={post.ogImage.url} />
      </Head>
      <BlogHeader
        title={post.title}
        coverImageUrl={post.coverImage}
        date={post.date}
        author={post.author}
      />
    </article>
  );
};

export default Blog;

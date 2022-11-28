import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import PostFooter from '../../components/organisms/PostFooter';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import type PostType from '../../interfaces/post';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className='mb-32'>
            <Head>
              <title>
                {post.title} | {CMS_NAME}
              </title>
              <meta property='og:image' content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
            <PostFooter />
          </article>
        </>
      )}
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

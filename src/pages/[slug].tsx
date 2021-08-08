import { GetStaticPaths, GetStaticProps } from 'next';
import Prismisc from '@prismicio/client';
import { RichTextBlock } from 'prismic-reactjs';

import { getPrismicClient } from '../services/prismic';
import { Sermon } from '../components/layouts/Sermon';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    thumbnail: {
      alt: string;
      url: string;
    };
    content: RichTextBlock[];
  };
}

interface PostProps {
  post: Post;
}

export default function SermonPage(props: PostProps): JSX.Element {
  return (<Sermon {...props} />);
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const postsPagination = await prismic.query(
    [Prismisc.predicates.at('document.type', 'sermon')],
    {
      fetch: ['sermon.title', 'sermon.content', 'sermon.thumbnail'],
      pageSize: 5,
    },
  );

  const slug = postsPagination?.results?.map((post) => ({
    params: { slug: post.uid },
  }));

  return {
    paths: slug,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const { slug } = context.params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('sermon', String(slug), {
    lang: 'pt-BR',
  });

  const post = {
    first_publication_date: response.first_publication_date,
    ...response,

    data: {
      ...response.data,
      title: response.data.title,
      content: response.data.content,
    },
  };

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 24, // 1 dia
  };
};

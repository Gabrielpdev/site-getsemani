import { GetStaticProps } from 'next';
import Primisc from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';

import { Sermons } from '../../components/layouts/Sermons';

interface Post {
  first_publication_date: string | null;
  uid: string;
  data: {
    title: string;
    thumbnail: {
      url: string;
      alt: string;
      dimensions: {
          width: number;
          height: number;
      };
    };
  };
}

interface PostProps {
  sermons: Post[];
}

export default function SermonsPage(props: PostProps): JSX.Element {
  console.log(props);
  return (<Sermons {...props} />);
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Primisc.predicates.at('document.type', 'sermon')],
    {
      fetch: ['sermon.title', 'sermon.content', 'sermon.thumbnail'],
      pageSize: 5,
    },
  );

  const results = response?.results?.map((post) => ({
    uid: post.uid,
    first_publication_date: post.first_publication_date,
    data: {
      title: post.data.title,
      content: post.data.content,
      thumbnail: post.data.thumbnail,
    },
  }));

  return {
    props: { sermons: results },
    revalidate: 60, // 1 dia
  };
};

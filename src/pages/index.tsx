import { GetStaticProps } from 'next';
import Primisc from '@prismicio/client';

import { getPrismicClient } from '../services/prismic';

import { Home as HomeComponent } from '../components/layouts/Home';

interface PostProps {
  title: string;
  thumbnail: {
    url: string;
    alt: string;
  }
}

interface SermonProps {
  uid: string;
  first_publication_date: string;
  data: PostProps;
}

interface HomeProps {
  'buttons-group' : {
    title: {
      text: string;
    }[];
    color: 'blue' | 'yellow';
  }[];
  'thumbnail-group': {
    image1: {
      alt: string;
      url: string;
    }
  }[];
}

interface PageProps {
  sermons: SermonProps[];
  home: HomeProps
}

export default function Home(props: PageProps): JSX.Element {
  return (<HomeComponent {...props} />);
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const postsPagination = await prismic.query(
    [Primisc.predicates.at('document.type', 'sermon')],
    {
      fetch: ['sermon.title', 'sermon.content', 'sermon.thumbnail'],
      pageSize: 5,
    },
  );

  const homePage = await prismic.query(
    [Primisc.predicates.at('document.type', 'home')],
  );

  const results = postsPagination?.results?.map((post) => ({
    uid: post.uid,
    first_publication_date: post.first_publication_date,
    data: {
      title: post.data.title,
      content: post.data.content,
      thumbnail: post.data.thumbnail,
    },
  }));

  return {
    props: { sermons: results, home: homePage.results[0].data },
    revalidate: 60,
  };
};

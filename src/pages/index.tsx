import { GetStaticProps } from 'next';
import Primisc from '@prismicio/client';

import { getPrismicClient } from '../services/prismic';

import { Home as HomeComponent } from '../components/layouts/Home';

export default function Home(props) {
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
  };
};

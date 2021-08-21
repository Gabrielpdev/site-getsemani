import { GetStaticProps } from 'next';
import Prismisc from '@prismicio/client';

import { getPrismicClient } from '../services/prismic';
import { Schedule } from '../components/layouts/Schedule';

interface MinisterialProps {
  date: string;
  title: string;
  color: 'blue' | 'yellow';
  number: string;
  street: string;
  district: string;
  thumbnail: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    }
  }
}

interface PostProps {
  schedule:{
    group: MinisterialProps[];
  };
}

export default function MinisterialNetworks(props: PostProps): JSX.Element {
  return (<Schedule {...props} />);
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismisc.predicates.at('document.type', 'schedule')],
  );

  const schedule = response.results[0].data;

  return {
    props: {
      schedule,
    },
    revalidate: 60, // 1 dia
  };
};

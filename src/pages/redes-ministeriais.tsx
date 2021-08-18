import { GetStaticProps } from 'next';
import Prismisc from '@prismicio/client';

import { getPrismicClient } from '../services/prismic';
import { Ministerials } from '../components/layouts/Ministerials';

interface MinisterialProps {
  time: string;
  title: string;
  location: {
    latitude: number;
    longitude: number;
  }
  color: 'blue' | 'yellow';
  number: string;
  street: string;
  district: string;
}

interface PostProps {
  ministerials:{
    group: MinisterialProps[];
  };
}

export default function MinisterialNetworks(props: PostProps): JSX.Element {
  return (<Ministerials {...props} />);
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismisc.predicates.at('document.type', 'ministerial_networks')],
  );

  const ministerials = response.results[0].data;

  return {
    props: {
      ministerials,
    },
    revalidate: 60 * 60 * 24, // 1 dia
  };
};

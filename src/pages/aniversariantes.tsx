import { GetStaticProps } from 'next';
import Prismisc from '@prismicio/client';

import { getPrismicClient } from '../services/prismic';
import { Birthday } from '../components/layouts/Birthday';

interface BirthdayProps {
  name: string;
  contact: string;
  date: string;
}

interface PostProps {
  birthdays:{
    group: BirthdayProps[];
  };
}

export default function Birthdays(props: PostProps): JSX.Element {
  console.log(props);
  return (<Birthday {...props} />);
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismisc.predicates.at('document.type', 'birthdays')],
  );

  const birthdays = response.results[0].data;

  return {
    props: {
      birthdays,
    },
    revalidate: 60, // 1 dia
  };
};

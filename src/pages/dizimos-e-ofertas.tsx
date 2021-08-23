import { GetStaticProps } from 'next';
import Primisc from '@prismicio/client';
import { RichTextBlock } from 'prismic-reactjs';

import { getPrismicClient } from '../services/prismic';

import { Offer } from '../components/layouts/Offer';

interface TithProps {
  description: RichTextBlock[];
  thumbnail: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    }
  };
  pix: string;
  name: string;
  cnpj: string;
  bank: string;
  agency: string;
  account: string;
}

interface PageProps {
  tithe: TithProps;
}

export default function Dizimos(props: PageProps): JSX.Element {
  return (<Offer {...props} />);
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const contactPage = await prismic.query(
    [Primisc.predicates.at('document.type', 'tithe')],
  );

  return {
    props: { tithe: contactPage.results[0].data },
    revalidate: 60,
  };
};

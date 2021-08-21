import { GetStaticProps } from 'next';
import Primisc from '@prismicio/client';
import { RichTextBlock } from 'prismic-reactjs';

import { getPrismicClient } from '../services/prismic';

import { Contact } from '../components/layouts/Contact';

interface ContactProps {
  content: RichTextBlock[];
  thumbnail: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    }
  }
}

interface PageProps {
  contact: ContactProps;
}

export default function Home(props: PageProps): JSX.Element {
  return (<Contact {...props} />);
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const contactPage = await prismic.query(
    [Primisc.predicates.at('document.type', 'contact')],
  );

  return {
    props: { contact: contactPage.results[0].data },
    revalidate: 60,
  };
};

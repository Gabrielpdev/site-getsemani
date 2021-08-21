import { Header } from '../../composed/Header';
import { SwiperImage } from '../../composed/SwiperImage';
import { SwiperSermon } from '../../composed/SwiperSermon';
import { Link } from '../../core/Link';

import { Container, ButtonsContent } from './styles';

interface PostProps {
  title: string;
  thumbnail: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    }
  }
}

interface SermonProps {
  uid: string;
  first_publication_date: string;
  data: PostProps;
}

interface HomeProps {
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

export function Home({ sermons, home }: PageProps): JSX.Element {
  const { 'thumbnail-group': thumbnailGroup } = home;

  return (
    <Container>
      <Header />
      <SwiperImage images={thumbnailGroup} />

      <ButtonsContent>
        <Link
          href="/redes-ministeriais"
          color="yellow"
        >
          Redes Ministérias
        </Link>
        <Link
          href="/agenda"
          color="blue"
        >
          Agenda
        </Link>
        <Link
          href="/contato"
          color="blue"
        >
          Contato
        </Link>
        <Link
          href="/dizimos-e-ofertas"
          color="yellow"
        >
          Dizimos e Ofertas
        </Link>
      </ButtonsContent>

      <SwiperSermon title="Palavra" sermons={sermons} />
    </Container>
  );
}

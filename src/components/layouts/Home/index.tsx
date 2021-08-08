import { v4 } from 'uuid';

import { Header } from '../../composed/Header';
import { SwiperImage } from '../../composed/SwiperImage';
import { SwiperSermon } from '../../composed/SwiperSermon';
import { Button } from '../../core/Button';

import { Container, ButtonsContent } from './styles';

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

export function Home({ sermons, home }: PageProps): JSX.Element {
  const { 'buttons-group': buttonsGroup, 'thumbnail-group': thumbnailGroup } = home;

  return (
    <Container>
      <Header />
      <SwiperImage images={thumbnailGroup} />

      <ButtonsContent>
        {buttonsGroup.map((button) => (
          <Button
            key={v4()}
            color={button.color}
          >
            {button.title[0].text}

          </Button>
        ))}
      </ButtonsContent>

      <SwiperSermon title="Palavra" sermons={sermons} />
    </Container>
  );
}

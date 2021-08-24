import { v4 } from 'uuid';
import Link from 'next/link';
import { Header } from '../../composed/Header';
import { Card } from '../../core/Card';

// import Hamburger from '../../../../public/icons/hamburger.svg';
// import ArrowLeft from '../../../../public/icons/arrow-left.svg';

import { Container, CardsContainer, SermonCard } from './styles';

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

export function Sermons({ sermons }: PostProps): JSX.Element {
  return (
    <Container>
      <Header isPost title="Palavras" />

      <CardsContainer>
        {sermons.map((sermon) => (
          <SermonCard key={v4()}>
            <Link href={`/palavra/${sermon.uid}`} passHref>
              <a>
                <Card
                  hasImage
                  thumbnail={sermon.data.thumbnail}
                  footerText={sermon.data.title}
                />
              </a>
            </Link>
          </SermonCard>
        ))}
      </CardsContainer>
    </Container>
  );
}

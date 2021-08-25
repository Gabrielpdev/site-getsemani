import { v4 } from 'uuid';
import Link from 'next/link';
import { useState } from 'react';
import { Header } from '../../composed/Header';
import { Card } from '../../core/Card';

import {
  Container, CardsContainer, SermonCard, Button,
} from './styles';

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
  next_page: string;
}

export function Sermons({
  sermons, next_page,
}: PostProps): JSX.Element {
  const [cards, setCards] = useState<Post[]>(sermons);
  const [urlNextPage, setUrlNextPage] = useState(next_page);

  function handleNextPage() {
    if (!urlNextPage) {
      return;
    }

    fetch(urlNextPage)
      .then((response) => response.json())
      .then((data) => {
        setUrlNextPage(data.next_page);
        setCards([...cards, ...data.results]);
      });
  }

  return (
    <Container>
      <Header isPost title="Palavras" />

      <CardsContainer>
        {cards.map((sermon) => (
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
        {urlNextPage && (
          <Button
            type="button"
            onClick={handleNextPage}
          >
            Carregar mais palavras
          </Button>
        )}
      </CardsContainer>
    </Container>
  );
}

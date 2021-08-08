import Link from 'next/link';

import { SwiperSlide } from 'swiper/react';
import { Card } from '../../core/Card';

import { Container, Title, Content } from './styles';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

interface PostProps {
  title: string;
  thumbnail: {
    url: string;
    alt: string;
  }
}

interface SermonsProps {
  first_publication_date: string;
  uid: string;
  data: PostProps;
}

interface SwiperSermonProps {
  title: string;
  sermons: SermonsProps[]
}

export function SwiperSermon({ title, sermons }: SwiperSermonProps): JSX.Element {
  return (
    <Container>
      <Title>{title}</Title>
      <Content
        spaceBetween={16}
        width={280}
        slidesPerView={1}
      >
        {sermons.map((sermon) => (
          <SwiperSlide key={sermon.uid}>
            <Link href={sermon.uid}>
              <a>
                <Card
                  title={sermon.data.title}
                  image={sermon.data.thumbnail.url}
                  alt={sermon.data.thumbnail.alt}
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Content>
    </Container>
  );
}

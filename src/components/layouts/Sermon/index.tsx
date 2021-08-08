import Image from 'next/image';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Header } from '../../composed/Header';

import Calendar from '../../../../public/icons/calendar.svg';
import Clock from '../../../../public/icons/clock.svg';

import {
  Container, Content, Title, DateContent,
} from './styles';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    thumbnail: {
      url: string;
      alt: string;
    };
    content: RichTextBlock[];
  };
}

interface PostProps {
  post: Post;
}

export function Sermon({ post }: PostProps) {
  const formattedDate = format(
    new Date(post.first_publication_date),
    'dd LLLL yyyy',
    {
      locale: ptBR,
    },
  );

  const formattedHour = format(
    new Date(post.first_publication_date),
    'H:mm',
    {
      locale: ptBR,
    },
  );

  return (
    <Container>
      <Header isPost />

      <Image
        src={post.data.thumbnail.url}
        alt={post.data.thumbnail.alt}
        width={500}
        height={300}
        layout="responsive"
      />

      <Title>{post.data.title}</Title>
      <DateContent>
        <Calendar />
        {formattedDate}
        &nbsp;
        -
        &nbsp;
        <Clock />
        {formattedHour}
      </DateContent>
      <Content>
        {RichText.render(post.data.content)}
      </Content>

    </Container>
  );
}

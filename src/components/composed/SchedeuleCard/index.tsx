import NextLink from 'next/link';
import { useMemo } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Card } from '../../core/Card';

import Localizacao from '../../../../public/icons/location.svg';

import {
  Container, Title, Subtype, Content, Address, Line, Street, District, Link,
} from './styles';

interface CardProps {
  title: string;
  color: 'blue' | 'yellow';
  number: string;
  street: string;
  date: string;
  district: string;
  thumbnail: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    }
  }
}

export function SchedeuleCard({
  title,
  color,
  number,
  street,
  date,
  district,
  thumbnail,
}: CardProps): JSX.Element {
  const formattedDate = useMemo(() => format(new Date(date), "iiii '-' ii  MMM '-' k':'mm'hrs'", {
    locale: ptBR,
  }), [date]);

  return (
    <Container>
      <Card
        hasImage
        thumbnail={thumbnail}
      >
        <Title>
          {title}
        </Title>

        <Subtype>{formattedDate}</Subtype>

        <Content>
          <Address>
            <Street>
              {`${street} - ${number}`}
            </Street>
            <District>{district}</District>
          </Address>

          <NextLink
            href={`https://www.google.com/maps/dir/?api=1&destination=R.${encodeURIComponent(street)},+${encodeURIComponent(number)}+-+Mantena,+MG,+35290-000`}
            passHref
          >
            <Link>
              <Localizacao />
            </Link>
          </NextLink>
        </Content>

        <Line color={color} />
      </Card>
    </Container>
  );
}

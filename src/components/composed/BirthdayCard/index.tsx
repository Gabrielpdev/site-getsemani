import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Card } from '../../core/Card';

import {
  Container, HeaderCard, Title, Subtype, Line, Contact,
} from './styles';

interface CardProps {
  name: string;
  contact: string;
  date: string;
  color: 'blue' | 'yellow';
}

export function BirthdayCard({
  name,
  contact,
  date,
  color,
}: CardProps): JSX.Element {
  const formattedDate = format(new Date(date), "iii',' 'Dia' dd", {
    locale: ptBR,
  });

  return (
    <Container>
      <Card>
        <HeaderCard>
          <Title>{name}</Title>
          <Subtype>
            {formattedDate}
          </Subtype>
        </HeaderCard>

        <Contact>
          Contato:
          {' '}
          {contact}
        </Contact>
        <Line color={color} />
      </Card>
    </Container>

  );
}

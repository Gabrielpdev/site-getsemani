import { v4 } from 'uuid';

import { Header } from '../../composed/Header';
import { BirthdayCard } from '../../composed/BirthdayCard';

import { Container, CardsContainer } from './styles';

interface BirthdayProps {
  name: string;
  contact: string;
  date: string;
}

interface MinisterialsProps {
  birthdays: {
    group: BirthdayProps[];
  }
}

export function Birthday({ birthdays }: MinisterialsProps): JSX.Element {
  return (
    <Container>
      <Header isPost title="Aniversariantes do mês" />

      <CardsContainer>
        {birthdays.group.map((ministerial, index) => (
          <BirthdayCard
            key={v4()}
            name={ministerial.name}
            contact={ministerial.contact}
            date={ministerial.date}
            color={index % 2 === 0 ? 'blue' : 'yellow'}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}

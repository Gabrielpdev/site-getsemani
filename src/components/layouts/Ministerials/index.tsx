import { v4 } from 'uuid';
import { Header } from '../../composed/Header';
import { MinisterialCard } from '../../composed/MinisterialCard';

// import Hamburger from '../../../../public/icons/hamburger.svg';
// import ArrowLeft from '../../../../public/icons/arrow-left.svg';

import { Container, CardsContainer } from './styles';

interface MinisterialProps {
  time: string;
  title: string;
  color: 'blue' | 'yellow';
  number: string;
  street: string;
  district: string;
}

interface MinisterialsProps {
  ministerials: {
    group: MinisterialProps[];
  }
}

export function Ministerials({ ministerials }: MinisterialsProps): JSX.Element {
  return (
    <Container>
      <Header isPost title="Redes Ministeriais" />

      <CardsContainer>
        {ministerials.group.map((ministerial, index) => (
          <MinisterialCard
            key={v4()}
            title={ministerial.title}
            number={ministerial.number}
            street={ministerial.street}
            time={ministerial.time}
            district={ministerial.district}
            color={index % 2 === 0 ? 'blue' : 'yellow'}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}

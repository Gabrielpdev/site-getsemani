import { v4 } from 'uuid';
import { Header } from '../../composed/Header';
import { MinisterialCard } from '../../core/MinisterialCard';

// import Hamburger from '../../../../public/icons/hamburger.svg';
// import ArrowLeft from '../../../../public/icons/arrow-left.svg';

import { Container, CardsContainer } from './styles';

interface MinisterialProps {
  time: string;
  title: string;
  location: {
    latitude: number;
    longitude: number;
  }
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
  console.log(ministerials);
  return (
    <Container>
      <Header />

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

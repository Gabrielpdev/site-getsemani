import { v4 } from 'uuid';
import { Header } from '../../composed/Header';
import { SchedeuleCard } from '../../composed/SchedeuleCard';

// import Hamburger from '../../../../public/icons/hamburger.svg';
// import ArrowLeft from '../../../../public/icons/arrow-left.svg';

import { Container, CardsContainer } from './styles';

interface MinisterialProps {
  date: string;
  title: string;
  color: 'blue' | 'yellow';
  number: string;
  street: string;
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

interface ScheduleProps {
  schedule: {
    group: MinisterialProps[];
  }
}

export function Schedule({ schedule }: ScheduleProps): JSX.Element {
  return (
    <Container>
      <Header isPost />

      <CardsContainer>
        {schedule.group.map((ministerial, index) => (
          <SchedeuleCard
            key={v4()}
            title={ministerial.title}
            number={ministerial.number}
            street={ministerial.street}
            date={ministerial.date}
            district={ministerial.district}
            thumbnail={ministerial.thumbnail}
            color={index % 2 === 0 ? 'blue' : 'yellow'}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}

import Localizacao from '../../../../public/icons/location.svg';

import {
  Container, Title, Date, Content, Address, Line, Street, District, Button,
} from './styles';

interface CardProps {
  title: string;
  color: 'blue' | 'yellow';
  number: string;
  street: string;
  time: string;
  district: string;
}

export function MinisterialCard({
  title,
  color,
  number,
  street,
  time,
  district,
}: CardProps): JSX.Element {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <Date>{time}</Date>

      <Content>
        <Address>
          <Street>
            {`${street} - ${number}`}
          </Street>
          <District>{district}</District>
        </Address>

        <Button
          href={`https://www.google.com/maps/dir/?api=1&destination=R.${encodeURIComponent(street)},+${encodeURIComponent(number)}+-+Mantena,+MG,+35290-000`}
        >
          <a>
            <Localizacao />
          </a>
        </Button>
      </Content>

      <Line color={color} />
    </Container>
  );
}

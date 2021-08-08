import Image from 'next/image';
import { Container, Footer } from './styles';

interface CardProps {
  title: string;
  image: string;
  alt: string;
}

export function Card({ title, image, alt }: CardProps): JSX.Element {
  return (
    <Container>
      <Image
        src={image}
        alt={alt}
        width={280}
        height={170}
        layout="responsive"
      />
      <Footer>
        {title}
      </Footer>
    </Container>
  );
}

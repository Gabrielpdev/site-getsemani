import Image from 'next/image';
import { Container, Footer } from './styles';

interface CardProps {
  children?: React.ReactNode;
  thumbnail?: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    }
  }
  hasImage?: boolean;
  footerText?: string;
}

export function Card({
  children,
  thumbnail,
  hasImage = false,
  footerText,
}: CardProps): JSX.Element {
  return (
    <Container>
      {hasImage && (
      <Image
        src={thumbnail.url}
        alt={thumbnail.alt}
        width={thumbnail.dimensions.width}
        height={thumbnail.dimensions.height}
        layout="responsive"
      />
      )}
      {children}
      {footerText && (
        <Footer>
          {footerText}
        </Footer>
      )}
    </Container>
  );
}

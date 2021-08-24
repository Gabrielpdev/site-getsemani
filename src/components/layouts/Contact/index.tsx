import Image from 'next/image';
import { RichText, RichTextBlock } from 'prismic-reactjs';

import { Header } from '../../composed/Header';

import {
  Container, Content, MapTitle, MapContent,
} from './styles';

interface ContactProps {
  content: RichTextBlock[];
  thumbnail: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    }
  }
}
interface PageProps {
  contact: ContactProps;
}

export function Contact({ contact }: PageProps): JSX.Element {
  return (
    <Container>
      <Header isPost title="Contato" />

      <Image
        src={contact.thumbnail.url}
        alt={contact.thumbnail.alt}
        placeholder="blur"
        blurDataURL={contact.thumbnail.url}
        width={contact.thumbnail.dimensions.width}
        height={contact.thumbnail.dimensions.height}
        layout="responsive"
      />

      <Content>
        {RichText.render(contact.content)}
      </Content>

      <MapTitle>
        LOCALIZAÇÃO:
      </MapTitle>
      <MapContent>
        <a href="https://www.google.com/maps/search/?api=1&query=R.Alaide%20amalia%20mota%20,+300+-+Mantena,+MG,+35290-000">
          <iframe
            title="map"
            height="400"
            width="100%"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Alaide%20amalia%20mota%20,300,%20mantena%20mg&amp;t=h&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
          Abrir no Google Maps
        </a>
      </MapContent>
    </Container>
  );
}

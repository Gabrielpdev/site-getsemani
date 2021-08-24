import Image from 'next/image';
import { RichText, RichTextBlock } from 'prismic-reactjs';

import { useRef, useState } from 'react';
import { Header } from '../../composed/Header';

import Clipboard from '../../../../public/icons/clipboard.svg';
import ClipboardCopy from '../../../../public/icons/clipboard-copy.svg';

import {
  Container, Description, Content, Acount, Pix, CopyTextButton,
} from './styles';

interface TithProps {
  description: RichTextBlock[];
  thumbnail: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    }
  };
  pix: string;
  name: string;
  cnpj: string;
  bank: string;
  agency: string;
  account: string;
}

interface PageProps {
  tithe: TithProps;
}
export function Offer({
  tithe,
}: PageProps) {
  const pixRef = useRef(null);
  const [isCopy, setIsCopy] = useState(false);

  function handleClipboard() {
    navigator.clipboard.writeText(tithe.pix);

    setIsCopy(true);
  }

  return (
    <Container>
      <Header isPost title="Dízimos e Ofertas" />

      <Image
        src={tithe.thumbnail.url}
        alt={tithe.thumbnail.alt}
        placeholder="blur"
        blurDataURL={tithe.thumbnail.url}
        width={tithe.thumbnail.dimensions.width}
        height={tithe.thumbnail.dimensions.height}
        layout="responsive"
      />
      <Content>

        <Description>
          {RichText.render(tithe.description)}
        </Description>

        <span>Conta Bancária: </span>
        <Acount>
          {`Nome: ${tithe.name}`}
          <br />
          {`CNPJ: ${tithe.cnpj}`}
          <br />
          {`Banco: ${tithe.bank}`}
          <br />
          {`Agência: ${tithe.agency}`}
          <br />
          {`Conta: ${tithe.account}`}
        </Acount>

        <span>Pix: </span>
        <Pix>
          <span ref={pixRef}>
            {tithe.pix}
          </span>
          <CopyTextButton onClick={handleClipboard}>
            {isCopy ? <ClipboardCopy /> : <Clipboard />}
          </CopyTextButton>
        </Pix>
      </Content>
    </Container>
  );
}

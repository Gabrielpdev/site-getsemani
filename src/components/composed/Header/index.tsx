import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Content } from './styles';

// import Hamburger from '../../../../public/icons/hamburger.svg';
import ArrowLeft from '../../../../public/icons/arrow-left.svg';

interface HeaderProps {
  isPost?: boolean;
}

export function Header({ isPost = false }: HeaderProps): JSX.Element {
  const router = useRouter();

  return (
    <Container>
      <Content>
        {/* {isPost ? <ArrowLeft onClick={router.back} /> : <Hamburger />} */}
        {isPost && <ArrowLeft onClick={router.back} /> }
        <Link href="/">
          <a>
            <Image
              src="/img/logo.png"
              alt="Logo da igreja batista getsemani"
              width="250"
              height="85"
            />
          </a>
        </Link>
      </Content>
    </Container>
  );
}

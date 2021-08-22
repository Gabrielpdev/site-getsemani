import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Hamburger from '../../../../public/icons/hamburger.svg';
import ArrowLeft from '../../../../public/icons/arrow-left.svg';

import Book from '../../../../public/icons/book.svg';
import Coin from '../../../../public/icons/coin.svg';
import Phone from '../../../../public/icons/phone.svg';
import Calendar from '../../../../public/icons/calendar_1px.svg';
import Info from '../../../../public/icons/info.svg';
import Facebook from '../../../../public/icons/facebook.svg';
import Instagram from '../../../../public/icons/instagram.svg';
import YouTube from '../../../../public/icons/youtube.svg';

import {
  Container,
  Content,
  SideMenu,
  SideMenuHeader,
  SocialContent,
  BackgroundSideMenu,
  Item,
  SideMenuFooter,
} from './styles';

interface HeaderProps {
  isPost?: boolean;
}

export function Header({ isPost = false }: HeaderProps): JSX.Element {
  const router = useRouter();

  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  useEffect(() => {
    document.querySelector('body').style.overflow = 'unset';
  }, []);

  function showSideMenu() {
    setIsSideMenuVisible(true);

    document.querySelector('body').style.overflow = 'hidden';
  }

  function hideSideMenu() {
    setIsSideMenuVisible(false);

    document.querySelector('body').style.overflow = 'unset';
  }

  return (
    <Container>

      <SideMenu show={isSideMenuVisible}>
        <SideMenuHeader>
          <Image
            src="/img/logo.png"
            alt="Logo da igreja batista getsemani"
            placeholder="blur"
            blurDataURL="/img/logo.png"
            width="315"
            height="70"
          />
          <SocialContent>
            <Link href="https://www.facebook.com/GetsemaniiMantena/">
              <a>
                <Facebook />
              </a>
            </Link>
            <Link href="https://www.instagram.com/getmantena/">
              <a>
                <Instagram />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCDvZhskexLs_iJ8vN06lSJA">
              <a>
                <YouTube />
              </a>
            </Link>
          </SocialContent>
        </SideMenuHeader>
        <Item>
          <Link href="/redes-ministeriais">
            <a>
              <Info />
              Redes Ministériais
            </a>
          </Link>
        </Item>
        <Item>
          <Link href="/agenda">
            <a>
              <Calendar />
              Agenda
            </a>
          </Link>
        </Item>
        <Item>
          <Link href="/dizimo">
            <a>
              <Coin />
              Dizimo e Ofertas
            </a>
          </Link>
        </Item>
        <Item>
          <Link href="/contato">
            <a>
              <Phone />
              Contato
            </a>
          </Link>
        </Item>
        <Item>
          <Link href="/palavra">
            <a>
              <Book />
              Palavra
            </a>
          </Link>
        </Item>
        <SideMenuFooter>
          © Criado por Gabriel Pereira - gabrielpdev
        </SideMenuFooter>
      </SideMenu>

      {isSideMenuVisible && <BackgroundSideMenu onClick={hideSideMenu} />}

      <Content>
        {isPost ? <ArrowLeft onClick={router.back} /> : <Hamburger onClick={showSideMenu} />}
        <Link href="/">
          <a>
            <Image
              src="/img/logo.png"
              alt="Logo da igreja batista getsemani"
              placeholder="blur"
              blurDataURL="/img/logo.png"
              width="250"
              height="85"
            />
          </a>
        </Link>
      </Content>
    </Container>
  );
}

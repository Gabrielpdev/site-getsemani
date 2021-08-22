import styled from 'styled-components';

interface SideMenuProps {
  show: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors.back_200};

  transition: all 0.4s ease-in-out;

  h1 {
    margin: 0 auto 0 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.9rem;
  
  img{
    margin: auto;

    width: 13.3rem;
    height: 4.4rem;
  }

  svg {
    position: absolute;
    cursor: pointer;
    left: 2rem;

    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const SideMenu = styled.div<SideMenuProps>`
  overflow: hidden;
  z-index: 3;

  position: absolute;
  top: 0;
  left: 0;

  width: ${({ show }) => (show ? '80%' : '0')};
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.back_200};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  padding: ${({ show }) => (show ? '2rem' : '0')};

  transition: width 0.4s ease;

  img{
    margin: auto;

    width: 24.3rem;
    height: 8rem;
  }

  svg {
    cursor: pointer;

    height: 2.8rem;
    width: 2.8rem;
  }
`;

export const SideMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SocialContent = styled.div`
  margin: 2rem 0;
  gap: 1rem;
  display: flex;
`;

export const BackgroundSideMenu = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.back};
  opacity: 0.7;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  
  width: 100%;

  margin: 2rem 0 0 4rem;

  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0em;
  text-align: left;

  svg {
    margin-right: 1rem;    
  }

  a, a:hover {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
`;

export const SideMenuFooter = styled.div`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.white};
`;

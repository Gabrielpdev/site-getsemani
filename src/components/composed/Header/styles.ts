import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors.back_200};

  h1 {
    margin: 0 auto 0 2rem;
  }

  img{
    margin: auto;

    width: 13.3rem;
    height: 4.4rem;
  }

  svg {
    position: absolute;
    left: 2rem;

    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.9rem;
`;

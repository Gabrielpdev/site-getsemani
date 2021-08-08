import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  img{
    border-radius: 1rem;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.back_100};

  border-radius: 0 0 1rem 1rem;

  padding: 1.2rem 1.6rem;

  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.3rem;
  letter-spacing: 0em;
  text-align: left;

`;

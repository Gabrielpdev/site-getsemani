import styled from 'styled-components';

export const Container = styled.div`
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.3rem;
  letter-spacing: 0em;
  text-align: left;

  color: ${({ theme }) => theme.colors.white};

  margin: 3.3rem 2rem 1rem;
`;

export const DateContent = styled.span`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1,6rem;
  letter-spacing: 0em;
  text-align: left;

  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;

  svg {
    height: 2rem;
    width: 2rem;

    margin-right: 1rem;
  }
`;

export const Content = styled.div`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
  letter-spacing: 0em;
  text-align: left;
  
  margin: 1rem 2rem 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const MapTitle = styled.p`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
  letter-spacing: 0em;
  text-align: left;

  color: ${({ theme }) => theme.colors.white};
  margin: 1rem 2rem 0;
`;

export const MapContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 2rem 0;

  a{
    color: ${({ theme }) => theme.colors.white};
  }
`;

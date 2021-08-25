import styled from 'styled-components';

export const Container = styled.div`
`;

export const CardsContainer = styled.div`
  padding: 2rem 1rem;
`;

export const SermonCard = styled.div`
  margin-top: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 2rem 1rem;
  
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.colors.white};
  
  margin-top: 1rem;

  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.6rem;
  letter-spacing: 0em;
`;

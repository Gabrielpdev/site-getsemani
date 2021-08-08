import styled from 'styled-components';

interface TraceProps {
  color: 'blue' | 'yellow';
}

export const Container = styled.button`
  padding: 1.6rem;
  border-radius: 1rem;

  color: ${({ theme }) => theme.colors.white_100};
  background-color: ${({ theme }) => theme.colors.back_100};

  height: 10rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;

  &:nth-child(3){
    order: 1;
  }

  @media(min-width: 420px){
    width: 47.6%;

    &:nth-child(3){
      order: 0;
    }
  }
`;

export const Text = styled.span`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0em;
  text-align: left;

`;

export const Trace = styled.hr<TraceProps>`
  width: 100%;
  border: 0;

  height: .4rem;
  border-radius: 999px;

  background-color: ${({ theme, color }) => (color === 'yellow' ? theme.colors.yellow : theme.colors.blue)}
`;

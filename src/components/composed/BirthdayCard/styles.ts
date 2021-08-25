import styled from 'styled-components';

interface TraceProps {
  color: 'blue' | 'yellow';
}

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.back_100};
  color: ${({ theme }) => theme.colors.white};

  padding: 1.7rem;
  border-radius: 10px;

  margin-top: 1rem;
`;

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.0rem;
  letter-spacing: 0em;
  text-align: left;
`;

export const Subtype = styled.div`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.0rem;
  letter-spacing: 0em;
  text-align: left;

  text-transform: capitalize;
`;

export const Contact = styled.div`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.9rem;
  letter-spacing: 0em;
  text-align: left;
`;

export const Line = styled.hr<TraceProps>`
  width: 100%;
  border: 0;

  height: .4rem;
  border-radius: 999px;
  margin-top: 1rem;
  background-color: ${({ theme, color }) => (color === 'yellow' ? theme.colors.yellow : theme.colors.blue)}
`;
